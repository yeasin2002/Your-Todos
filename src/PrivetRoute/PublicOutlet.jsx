import { Outlet, Navigate } from 'react-router-dom';

const PublicOutlet = () => {
  let userToken = localStorage.getItem('userToken');

  if (userToken === null) {
    return <Outlet />;
  }

  return <Navigate to="home" />;
};

export default PublicOutlet;
