import React, { lazy, Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import useTask from '../../../../../hooks/useTask';

import Loading from '../../../../../layouts/Loading';
import MobileTopArea from '../../Layout/MobileTopArea';
//  sub routes
const AllTodo = lazy(() => import('./Todo Status/AllTodo'));
const Complete = lazy(() => import('./Todo Status/Complete'));
const Incomplete = lazy(() => import('./Todo Status/Incomplete'));

const TodoIndex = () => {
  let { taskData, TaskStatus } = useTask();
  console.log(taskData);

  return (
    <>
      <div className=" w-full">
        <MobileTopArea />
        <div className=" bg-slate-400 flex justify-around py-2">
          <Link to="/">All</Link>
          <Link to="complete">complete </Link>
          <Link to="incomplete">incomplete </Link>
        </div>

        <Suspense fallback={<Loading />}>
          <Routes>
            <Route
              index
              element={<AllTodo taskData={taskData} TaskStatus={TaskStatus} />}
            />
            <Route path="complete" element={<Complete />} />
            <Route path="incomplete" element={<Incomplete />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
};

export default TodoIndex;
