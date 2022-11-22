import React from 'react';
import { Routes, Route } from 'react-router-dom';

// pages componenetes
import TodoIndex from '../pages/todo home/TodoIndex';
import Notification from '../pages/notification/Notification';
import Search from '../pages/search/Search';
import Profile from '../pages/profile/Profile';

const TodoHomeRoute = () => {
  return (
    <Routes>
      <Route index path="todoHome" element={TodoIndex} />
      <Route path="notification" element={Notification} />
      <Route path="search" element={Search} />
      <Route path="profile" element={Profile} />
    </Routes>
  );
};

export default TodoHomeRoute;
