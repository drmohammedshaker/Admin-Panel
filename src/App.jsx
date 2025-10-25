import React from "react";
import Navbar from "./Components/Navbar/navbar";
import Sidebar from "./Components/Sidebar/sidebar";
import Admin from "./Pages/Admin/admin";

export default function App() {
  return (
    <div>
      <Navbar />
      <Admin />
    </div>
  );
}
