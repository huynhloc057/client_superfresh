import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutesAdmin = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return userInfo?.user?.role === "admin" ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutesAdmin;
