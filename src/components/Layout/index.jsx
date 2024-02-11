import { Outlet } from "react-router-dom";

import React from "react";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <main className="bg-gray-50">
      <Navbar />
      <Outlet />
    </main>
  );
};

export default Layout;
