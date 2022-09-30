import React from "react";
import "./NavBar.css";
export default function NavBar() {
  return <div className="navbar">
        <div className="navContainer">
          <span className="logo">Martin Booking</span>
          <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
          </div>
        </div>
    </div>;
}
