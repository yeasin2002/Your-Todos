import { Outlet, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const PrivetOutlet = () => {
  const [userAuth, setUserAuth] = useState(true);
  let userToken = localStorage.getItem('userToken');

  useEffect(() => {
    setUserAuth(userToken);
  }, [userToken]);

  if (userAuth) {
    return <Outlet />;
  } else {
    return <Navigate to="login" />;
  }
};

export default PrivetOutlet;
