import React from "react";
import "./navbar.css";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="" className="navLogo" />
      <img src="" alt="" className="navProfile" />
    </div>
  );
}
