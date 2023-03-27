import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { UserContext } from '../../../../context/UserContext';

// pages component
import TodoIndex from '../pages/todo home/TodoIndex';
import Notification from '../pages/notification/Notification';
import Search from '../pages/search/Search';
import Profile from '../pages/profile/Profile';

const TodoHomeRoute = () => {
  // const first = useContext(UserContext);

  return (
    <Routes>
      <Route index element={<TodoIndex />} />
      <Route path="notification" element={<Notification />} />
      <Route path="search" element={<Search />} />
      <Route path="profile" element={<Profile />} />
      <Route path="/*" element={<TodoIndex />} />
    </Routes>
  );
};

export default TodoHomeRoute;
