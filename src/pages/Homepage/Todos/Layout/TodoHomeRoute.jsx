import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { UserContext } from '../../../../context/UserContext';

// pages component
import TodoIndex from '../pages/todo home/TodoIndex';
import Notification from '../pages/notification/Notification';
import Search from '../pages/search/Search';
import Profile from '../pages/profile/Profile';
import Preferences from '../pages/profile/Preferences';
import AccountSettings from '../pages/profile/AccountSettings';

const TodoHomeRoute = () => {
  return (
    <Routes>
      <Route index element={<TodoIndex />} />
      <Route path="notification" element={<Notification />} />
      <Route path="search/" element={<Search />} />
      <Route path="/*" element={<TodoIndex />} />

      <Route path="profile" element={<Profile />}>
        <Route path="preferences" element={<Preferences />} />
        <Route path="accountsettings" element={<AccountSettings />} />
      </Route>
    </Routes>
  );
};

export default TodoHomeRoute;
