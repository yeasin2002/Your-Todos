import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

// component
import MobileProfileView from './MobileProfileView';
import DeskTopProfileNav from './DeskTopProfileNav';

const Profile = () => {
  return (
    <div className=" w-full">
      <MobileProfileView />
      <DeskTopProfileNav />

      {/* outlet show show here */}
      <Outlet />
    </div>
  );
};

export default Profile;
