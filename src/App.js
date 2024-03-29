import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Auth from "./features/auth/Auth";
import AuthMiddleware from "./features/auth/AuthMiddleware";
import ProductList from "./features/products/ProductList";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="auth" element={<Auth />} />
        <Route index element={<ProductList />} />
        {/* protected routes  */}
        <Route element={<AuthMiddleware />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
