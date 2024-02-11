import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectCurrentToken } from "./authSlice";

const AuthMiddleware = () => {
  let token = useSelector(selectCurrentToken);

  if (!token) {
    const localCheck = localStorage.getItem("ecommerceuser");
    if (localCheck) {
      token = localCheck;
    }
  }
  const location = useLocation();

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/auth" state={{ from: location }} replace />
  );
};

export default AuthMiddleware;
