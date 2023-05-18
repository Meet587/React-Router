import React, { memo } from "react";
import useAuth from "../Hooks/useAuth";
import { Navigate, Outlet, useLocation } from "react-router";

const RequireAuth = () => {
  const isAuth = useAuth();
  const location = useLocation();
  console.log(location)
  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} state={{ from: location }} replace />
  );
};

export default memo(RequireAuth);
