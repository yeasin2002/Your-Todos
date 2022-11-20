import React, { Suspense, useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

//  components

import HomeDesktopNav from './Home Nav/HomeDesktopNav';
import HomeMobileNav from './Home Nav/HomeMobileNav';
import Leave from '../../components/Leave';
import Loading from '../../layouts/Loading';

import TodoHome from './Todos/Pages/TodoHome/TodoHome';
import Profile from './Todos/Pages/Profile page/Profile';
import Notifications from './Todos/Pages/Notifications/Notifications';
import Search from './Todos/Pages/Search page/Search';

const Home = () => {
  const [IsSidebarShow, setIsSidebarShow] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    let userData = localStorage.getItem('userToken');
    // FetchUserData(userData);
  }, []);

  useEffect(() => {
    navigate('todoHome');
  }, []);

  const FetchUserData = userData => {
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${userData}`,
      },
    };

    fetch('https://baby-todo.onrender.com/user?settings=', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  };

  return (
    <div className="w-screen h-screen transition-all">
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
            <Route path="todoHome/*" index element={<TodoHome />} />
            <Route path="search" element={<Search />} />
            <Route path="profile" element={<Profile />} />
            <Route path="notification" element={<Notifications />} />
          </Routes>
        </Suspense>
      </div>

      {/* nav bar from mobile  */}
      <HomeMobileNav />
    </div>
  );
};

export default Home;
