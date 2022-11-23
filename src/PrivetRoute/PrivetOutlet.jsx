import { Outlet, Navigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const PrivetOutlet = ({ userAuth }) => {
  if (userAuth) {
    return <Outlet />;
  } else {
    return <Navigate to="login" />;
  }
};

export default PrivetOutlet;
