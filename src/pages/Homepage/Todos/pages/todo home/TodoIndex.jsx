import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import useTask from '../../../../../hooks/useTask';

import Loading from '../../../../../layouts/Loading';
import MobileTopArea from '../../Layout/MobileTopArea';

//  sub routes
const AllTodo = lazy(() => import('./Todo Status/AllTodo'));
const Complete = lazy(() => import('./Todo Status/Complete'));
const Incomplete = lazy(() => import('./Todo Status/Incomplete'));

const TodoIndex = () => {
  const [completeTask, setCompleteTask] = useState([]);
  const [IncompleteTasks, setIncompleteTasks] = useState([]);
  let fetchData = useTask();
  let { taskData, TaskStatus } = fetchData;
  useEffect(() => {
    // complete
    let completeFilter = taskData?.filter(allTask => {
      return allTask?.completed;
    });
    setCompleteTask(completeFilter);

    // incomplete
    let InCompleteFilter = taskData?.filter(allTask => {
      return !allTask?.completed;
    });
    setIncompleteTasks(InCompleteFilter);
  }, [taskData]);

  return (
    <>
      <div className=" w-full">
        <MobileTopArea />
        <div className=" bg-slate-400 flex justify-around py-2">
          <Link to="">All</Link>
          <Link to="complete">complete </Link>
          <Link to="incomplete">incomplete </Link>
        </div>

        <Suspense fallback={<Loading />}>
          <Routes>
            <Route
              index
              element={<AllTodo taskData={taskData} TaskStatus={TaskStatus} />}
            />
            <Route
              path="complete"
              element={<Complete completeTask={completeTask} />}
            />
            <Route
              path="incomplete"
              element={<Incomplete IncompleteTasks={IncompleteTasks} />}
            />
          </Routes>
        </Suspense>
      </div>
    </>
  );
};

export default TodoIndex;
