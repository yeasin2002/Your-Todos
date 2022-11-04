// import React, { useContext } from "react";
// import { Outlet } from "react-router-dom";

// const privetOutlet = ({ children }) => {
//   return;
// };

// export default privetOutlet;

import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const PrivetOutlet = () => {
  if (AuthContext) {
    return <Outlet />;
  }
  return <Navigate to={"/login"} />;
};

export default PrivetOutlet;
