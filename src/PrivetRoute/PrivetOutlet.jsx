import { Outlet, Navigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const PrivetOutlet = () => {
  let theAuth = true;

  if (theAuth) {
    return <Outlet />;
  } else {
    return <Navigate to="login" />;
  }
};

export default PrivetOutlet;
