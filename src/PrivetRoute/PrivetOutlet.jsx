import { Outlet, Navigate } from 'react-router-dom';

const PrivetOutlet = () => {
  let userToken = localStorage.getItem('userToken');

  if (userToken === null) {
    return <Navigate to="login" />;
  }

  return <Outlet />;
};

export default PrivetOutlet;
