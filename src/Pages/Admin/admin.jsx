import React from "react";
import "./admin.css";
import Sidebar from "../../Components/Sidebar/sidebar";
import { Routes, Route } from "react-router-dom";
import AddProduct from "../../Components/AddProduct/addProduct";
import ListProduct from "../../Components/ListProduct/listProduct";
export default function Admin() {
  return (
    <div className="admin">
      <Sidebar />
      <Routes>
        <Route path="/" element={<AddProduct />}></Route>
        <Route path="/listproduct" element={<ListProduct />}></Route>
      </Routes>
    </div>
  );
}
