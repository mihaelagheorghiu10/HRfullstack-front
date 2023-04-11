import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const RequireAuth = ({ children }) => {
  const { authed, login } = useAuth();

  const saved = localStorage.getItem("auth_token");
  // if (saved && !authed) login(localStorage.getItem);

  return saved ? children : <Navigate to="/login" replace />;
};

export default RequireAuth;
