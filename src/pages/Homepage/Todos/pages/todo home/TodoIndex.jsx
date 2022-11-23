import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

//  sub routes
import AllTodo from './Todo Status/AllTodo';
import Complete from './Todo Status/Complete';
import Incomplete from './Todo Status/Incomplete';

const TodoIndex = () => {
  return (
    <div className=" w-full">
      <div className=" bg-slate-400 flex justify-around py-2">
        <Link to="/">All</Link>
        <Link to="complete">complete </Link>
        <Link to="incomplete">incomplete </Link>
      </div>

      <Routes>
        <Route index element={<AllTodo />} />
        <Route path="complete" element={<Complete />} />
        <Route path="incomplete" element={<Incomplete />} />
      </Routes>
    </div>
  );
};

export default TodoIndex;
