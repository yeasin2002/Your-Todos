import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// component
import MobileProfileView from './MobileProfileView';
import DeskTopProfileNav from './DeskTopProfileNav';

import Preferences from './Preferences';
import AccountSettings from './AccountSettings';
import Loading from '../../../../../layouts/Loading';

const Profile = () => {
  return (
    <div className="w-full">
      <MobileProfileView />
      <DeskTopProfileNav />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route index  element={<Preferences />} />
          <Route path="AccountSettings" element={<AccountSettings />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default Profile;
