import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// component
import MobileProfileView from './MobileProfileView';
import DeskTopProfileNav from './DeskTopProfileNav';
import OutletNav from '../../../../../components/OutletNav';

const Profile = ({ IsMobileSeen, setIsMobileSeen }) => {
  const [IsMobile, setIsMobile] = useState(false);
  const [whatHeight, setWhatHeight] = useState(0);

  let windowWidth = window.innerWidth;
  useEffect(() => {
    windowWidth <= 1024 ? setIsMobile(true) : setIsMobile(false);
    setWhatHeight(windowWidth);
  }, []);

  return (
    <div className=" w-full">
      <MobileProfileView
        IsMobileSeen={IsMobileSeen}
        setIsMobileSeen={setIsMobileSeen}
      />
      <DeskTopProfileNav />

      {/*  for Desktop  */}
      {IsMobile || (
        <div>
          <Outlet />
        </div>
      )}

      {/* for mobile  */}
      {IsMobile && IsMobileSeen && (
        <div className={' bg-slate-300 absolute top-0  w-full h-full'}>
          <AnimatePresence>
            <OutletNav setIsMobileSeen={setIsMobileSeen} />
          </AnimatePresence>
          <div>
            <Outlet />
          </div>
        </div>
      )}
    </div>
  );
};
export default Profile;
