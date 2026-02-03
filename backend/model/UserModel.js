const mongoose = require("mongoose");

const userSchema = require("../schema/UserSchema");
const UserModel = new mongoose.model("User", userSchema);

module.exports = UserModel;