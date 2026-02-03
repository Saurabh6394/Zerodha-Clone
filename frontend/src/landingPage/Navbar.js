import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3002/api/verify", {
        withCredentials: true,
      })
      .then(() => setIsLoggedIn(true))
      .catch(() => setIsLoggedIn(false));
  }, []);

  const handleLogout = async () => {
    await axios.post(
      "http://localhost:3002/api/logout",
      {},
      { withCredentials: true }
    );

    setIsLoggedIn(false);
    navigate("/");
    window.location.reload();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src="/media/images/logo.svg" alt="logo" width="120" />
        </Link>

        {/* Toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarContent">

          <ul className="navbar-nav mx-auto gap-lg-4 text-center">

            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/product">Product</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/pricing">Pricing</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/support">Support</Link>
            </li>

            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                style={{ textDecoration: "none" }}
                onClick={async () => {
                  try {
                    await axios.get(
                      "http://localhost:3002/api/verify",
                      { withCredentials: true }
                    );

                    window.open("http://localhost:3000", "_blank");

                  } catch {
                    // 👇 pass redirect info
                    navigate("/login", { state: { fromDashboard: true } });
                  }
                }}
              >
                Dashboard
              </button>

            </li>

          </ul>

          {/* Profile Section (RIGHT SIDE) */}
          {/* Profile Section */}
          <div className="dropdown ms-auto">
            <button
              className="profile-btn "
              type="button"
              data-bs-toggle="dropdown"
            >
              <span className="profile-avatar">
                {isLoggedIn ? "S" : "👤"}
              </span>
            </button>

            <ul className="dropdown-menu dropdown-menu-end profile-dropdown">
              {!isLoggedIn && (
                <>
                  <li>
                    <Link className="dropdown-item" to="/signup">
                      Create Account
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/login">
                      Login
                    </Link>
                  </li>
                </>
              )}

              {isLoggedIn && (
                <>
                  <li className="dropdown-header">Signed in</li>
                  <li>
                    <button
                      className="dropdown-item text-danger"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
