<<<<<<< HEAD
import React, { Suspense, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
=======
import React, { useState } from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
>>>>>>> bb9e609bcf59874ef65bf873cd8f97cf89f1314b

//  Routes
import TodoHomeRoute from './Todos/Layout/TodoHomeRoute';

//  shared Layout
import DeskTopNav from './Todos/Layout/DeskTopNav';
import MobileNav from './Todos/Layout/MobileNav';
import MobileTopArea from './Todos/Layout/MobileTopArea';

<<<<<<< HEAD
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

=======
//  pages components
import Notification from './Todos/pages/notification/Notification';
import Profile from './Todos/pages/profile/Profile';
import Search from './Todos/pages/search/Search';
import TodoIndex from './Todos/pages/todo home/TodoIndex';
import DesktopSidebar from './Todos/Layout/DesktopSidebar';

const Home = () => {
  const [IsSidebarShow, setIsSidebarShow] = useState(true);
>>>>>>> bb9e609bcf59874ef65bf873cd8f97cf89f1314b
  return (
    <div className=" justify-between w-screen h-screen">
      <MobileTopArea />

<<<<<<< HEAD
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
=======
      <div className=" flex justify-between w-full h-full">
        <DesktopSidebar
          setIsSidebarShow={setIsSidebarShow}
          IsSidebarShow={IsSidebarShow}
        />
        {/* <DeskTopNav /> */}
        <TodoHomeRoute />
>>>>>>> bb9e609bcf59874ef65bf873cd8f97cf89f1314b
      </div>

      <div>
        <MobileNav />
      </div>
    </div>
  );
};

export default Home;
