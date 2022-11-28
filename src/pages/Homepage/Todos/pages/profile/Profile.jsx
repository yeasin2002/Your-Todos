import React from 'react';
import MobileProfileView from './MobileProfileView';
import DeskTopProfileNav from './DeskTopProfileNav';

const Profile = () => {
  return (
    <div className="w-full">
      <MobileProfileView />
      <DeskTopProfileNav />
    </div>
  );
};

export default Profile;
