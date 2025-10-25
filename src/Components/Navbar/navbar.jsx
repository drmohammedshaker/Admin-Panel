import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import { UserCircle } from "lucide-react";
export default function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="" className="navLogo" />
    </div>
  );
}
