import { Outlet, Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const PrivetOutlet = () => {
  if (AuthContext) {
    return <Outlet />;
  } else {
    return <Navigate to="login" />;
  }
};

export default PrivetOutlet;
