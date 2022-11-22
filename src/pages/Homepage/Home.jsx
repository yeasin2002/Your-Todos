import React, { Suspense, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// hooks
import { UserContext } from '../../context/UserContext';
import useUserData from '../../hooks/useUserData';

//  components

import HomeDesktopNav from './Home Nav/HomeDesktopNav';
import HomeMobileNav from './Home Nav/HomeMobileNav';
import Leave from '../../components/Leave';
import Loading from '../../layouts/Loading';

import TodoHome from './Todos/Pages/TodoHome/TodoHome';
import Profile from './Todos/Pages/Profile page/Profile';
import Notifications from './Todos/Pages/Notifications/Notifications';
import Search from './Todos/Pages/Search page/Search';

import LogInFailed from './Todos/Layout/LogInFailed';

const Home = () => {
  const [IsSidebarShow, setIsSidebarShow] = useState(true);
  const UserData = useUserData();

  return (
    <UserContext.Provider value={UserData}>
      <div className="flex flex-col justify-between w-screen h-screen transition-all">
        <div className=" flex w-full h-full transition-all">
          <AnimatePresence>
            {IsSidebarShow ? (
              <HomeDesktopNav setIsSidebarShow={setIsSidebarShow} />
            ) : (
              <Leave setIsSidebarShow={setIsSidebarShow} />
            )}
          </AnimatePresence>

          <Suspense fallback={<Loading />}>
            <Routes>
              <Route index element={<TodoHome />} />
              <Route path="search" element={<Search />} />
              <Route path="profile" element={<Profile />} />
              <Route path="notification" element={<Notifications />} />
            </Routes>
          </Suspense>
        </div>

        {/* nav bar from mobile  */}
        <div>
          <HomeMobileNav />
        </div>
      </div>

      {/* {IsLoginFailed && <LogInFailed />} */}
    </UserContext.Provider>
  );
};

export default Home;
