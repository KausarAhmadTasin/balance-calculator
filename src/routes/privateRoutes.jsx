import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../components/Loading/Loading";
import Login from "../pages/Auth/Login";
import { Navigate } from "react-router-dom";

const privateRoutes = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loading />;
  }
  if (!user) {
    return <Navigate to="login" />;
  }
  return children;
};

export default privateRoutes;
