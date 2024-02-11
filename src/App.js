import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Auth from "./features/auth/Auth";
import AuthMiddleware from "./features/auth/AuthMiddleware";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="auth" element={<Auth />} />
        {/* protected routes  */}
        <Route element={<AuthMiddleware />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
