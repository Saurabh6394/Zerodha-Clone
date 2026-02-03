const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const app = express();
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

// Models
const HoldingModel = require("./model/HoldingModel");
const PositionModel = require("./model/PositionModel");
const OrderModel = require("./model/OrderModel");
const UserModel = require("./model/UserModel");

// ========================
// MIDDLEWARE
// ========================

app.use(bodyParser.json());
app.use(cookieParser());

app.use(
  cors({
    origin: ["http://localhost:3001", "http://localhost:3000"],
    credentials: true,
  })
);

// ========================
// DATABASE CONNECTION
// ========================

mongoose
  .connect(url)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// ========================
// BASIC ROUTE
// ========================

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// ========================
// AUTH ROUTES
// ========================

// SIGNUP
app.post("/api/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExists = await UserModel.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await UserModel.create({
      name,
      email,
      password: hashedPassword,
    });

    // ✅ Generate token
    const token = jwt.sign(
      { id: newUser._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // ✅ Set cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,     // false for localhost
      sameSite: "Lax",
    });

    res.status(201).json({ message: "Signup successful" });

  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});


// LOGIN
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,   // VERY IMPORTANT for localhost
      sameSite: "Lax"
    });


    res.json({ message: "Login successful" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// LOGOUT
app.post("/api/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out successfully" });
});

// VERIFY USER (for dashboard protection)
app.get("/api/verify", async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Not authorized" });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET);
    res.json({ message: "Authorized" });
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
});

// ========================
// DASHBOARD PROTECTED ROUTE
// ========================

app.get("/api/dashboard", async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Not authorized" });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET);
    res.json({ message: "Welcome to Dashboard" });
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
});

// ========================
// EXISTING STOCK ROUTES
// ========================

app.get("/allHoldings", async (req, res) => {
  const holdings = await HoldingModel.find({});
  res.json(holdings);
});

app.get("/allPositions", async (req, res) => {
  const positions = await PositionModel.find({});
  res.json(positions);
});

app.get("/allOrders", async (req, res) => {
  const orders = await OrderModel.find({});
  res.json(orders);
});

// ========================
// NEW ORDER ROUTE
// ========================

app.post("/newOrder", async (req, res) => {
  const { name, qty, price, mode } = req.body;

  const newOrder = new OrderModel({
    name,
    qty,
    price,
    mode,
  });

  await newOrder.save();

  if (mode === "BUY") {
    const existingHolding = await HoldingModel.findOne({ name });

    if (existingHolding) {
      const totalQty = existingHolding.qty + qty;
      existingHolding.avg =
        (existingHolding.avg * existingHolding.qty + price * qty) / totalQty;
      existingHolding.qty = totalQty;
      await existingHolding.save();
    } else {
      const newHolding = new HoldingModel({
        name,
        qty,
        avg: price,
        price,
        net: "0.00%",
        day: "0.00%",
      });
      await newHolding.save();
    }
  } else if (mode === "SELL") {
    const existingHolding = await HoldingModel.findOne({ name });

    if (existingHolding) {
      existingHolding.qty -= qty;

      if (existingHolding.qty <= 0) {
        await HoldingModel.deleteOne({ name });
      } else {
        await existingHolding.save();
      }
    }
  }

  res.send("Order placed");
});

// ========================
// SERVER START
// ========================

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
