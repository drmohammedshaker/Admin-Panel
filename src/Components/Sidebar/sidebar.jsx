import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { PackagePlus, TextAlignStart } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <div className="sidebarItem">
          <PackagePlus />
          <p>Add Product</p>
        </div>
      </Link>
      <Link to={"/listproduct"} style={{ textDecoration: "none" }}>
        <div className="sidebarItem">
          <TextAlignStart />
          <p>All Products </p>
        </div>
      </Link>
    </div>
  );
}
