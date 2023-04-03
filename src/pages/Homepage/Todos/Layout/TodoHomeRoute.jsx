import React, { useContext, useState } from 'react';
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
  const [IsMobileSeen, setIsMobileSeen] = useState(false);
  return (
    <Routes>
      <Route index element={<TodoIndex />} />
      <Route path="notification" element={<Notification />} />
      <Route path="search/" element={<Search />} />
      <Route path="/*" element={<TodoIndex />} />

      <Route
        path="profile"
        element={
          <Profile
            IsMobileSeen={IsMobileSeen}
            setIsMobileSeen={setIsMobileSeen}
          />
        }
      >
        <Route
          path="preferences"
          element={<Preferences setIsMobileSeen={setIsMobileSeen} />}
        />
        <Route
          path="accountsettings"
          element={<AccountSettings setIsMobileSeen={setIsMobileSeen} />}
        />
      </Route>
    </Routes>
  );
};

export default TodoHomeRoute;
