import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const RequireAuth = ({ children }) => {
  const { authed } = useAuth();
  const saved = localStorage.getItem("login");
  return saved || authed === true ? children : <Navigate to="/login" replace />;
};

export default RequireAuth;
