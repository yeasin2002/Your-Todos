import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Loading from '../../../layouts/Loading';

const TodoHome = lazy(() => import('./Pages/TodoHome'));
const Search = lazy(() => import('./Pages/Search'));
const Profile = lazy(() => import('./Pages/Profile'));
const Notifications = lazy(() => import('./Pages/Notifications'));

// pages components

const TodoIndex = () => {
  return (
    <div className=" w-full h-full">
      {/* <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="todoHome" index element={<TodoHome />} />
          <Route path="search" element={<Search />} />
          <Route path="profile" element={<Profile />} />
          <Route path="notification" element={<Notifications />} />
        </Routes>
      </Suspense> */}
    </div>
  );
};

export default TodoIndex;
