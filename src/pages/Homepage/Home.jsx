import React, { Suspense, useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navigate, Route, Routes } from 'react-router-dom';

//  components
import TodoIndex from './Todos/todoIndex';

import HomeDesktopNav from './Home Nav/HomeDesktopNav';
import HomeMobileNav from './Home Nav/HomeMobileNav';
import Leave from '../../components/Leave';
import Loading from '../../layouts/Loading';

import TodoHome from './Todos/Pages/TodoHome';
import Profile from './Todos/Pages/Profile';
import Notifications from './Todos/Pages/Notifications';
import Search from './Todos/Pages/Search';

const Home = () => {
  const [IsSidebarShow, setIsSidebarShow] = useState(true);

  useEffect(() => {
    let userData = localStorage.getItem('userToken');
    // FetchUserData(userData);
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
    <div className="w-screen h-screen">
      <div className=" flex w-full h-full transition-all">
        <AnimatePresence>
          {IsSidebarShow ? (
            <HomeDesktopNav setIsSidebarShow={setIsSidebarShow} />
          ) : (
            <Leave setIsSidebarShow={setIsSidebarShow} />
          )}
        </AnimatePresence>

        {/* <TodoIndex /> */}

        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="todoHome" index element={<TodoHome />} />
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
