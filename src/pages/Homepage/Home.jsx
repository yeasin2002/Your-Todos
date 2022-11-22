import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';

//  Routes
import TodoHomeRoute from './Todos/Layout/TodoHomeRoute';

//  shared Layout
import DeskTopNav from './Todos/Layout/DeskTopNav';
import MobileNav from './Todos/Layout/MobileNav';
import MobileTopArea from './Todos/Layout/MobileTopArea';

//  pages components
import Notification from './Todos/pages/notification/Notification';
import Profile from './Todos/pages/profile/Profile';
import Search from './Todos/pages/search/Search';
import TodoIndex from './Todos/pages/todo home/TodoIndex';

const Home = () => {
  return (
    <div className="flex flex-col justify-between w-screen h-screen">
      <MobileTopArea />

      <div className=" flex justify-between w-full h-full">
        <DeskTopNav />
        <TodoHomeRoute />
      </div>

      <div>
        <MobileNav />
      </div>
    </div>
  );
};

export default Home;
