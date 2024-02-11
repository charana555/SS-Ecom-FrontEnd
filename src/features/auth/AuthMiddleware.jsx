import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCredentials } from "./authSlice";

import { selectCurrentToken } from "./authSlice";

const AuthMiddleware = () => {
  const dispatch = useDispatch();
  let token = useSelector(selectCurrentToken);

  if (!token) {
    const localCheck = localStorage.getItem("ecommerceuser");

    if (localCheck) {
      token = localCheck;
      dispatch(
        setCredentials({
          user: null,
          token: localCheck,
        })
      );
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
