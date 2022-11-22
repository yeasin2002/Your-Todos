import { Outlet, Navigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const PublicOutlet = ({ userAuth }) => {
  if (!userAuth) {
    return <Outlet />;
  } else {
    return <Navigate to="home" />;
  }
};

export default PublicOutlet;
