import React, { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';

// todo components
const AllTodo = lazy(() => import('./Todo Status/AllTodo'));
const Complete = lazy(() => import('./Todo Status/Complete'));
const InComplete = lazy(() => import('./Todo Status/InComplete'));

//  assets
import Loading from '../../../../../layouts/Loading';
import MobileTopArea from '../../Layout/MobileTopArea';

const TodoHome = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('allTodo');
  }, []);

  return (
    <div className=" w-full h-full">
      <MobileTopArea />
      <div className=" bg-sky-250 flex justify-around px-4 py-2">
        <Link className="linkItems" to={'allTodo'}>
          AllTodo
        </Link>
        <Link className="linkItems" to={'incomplete'}>
          incomplete
        </Link>
        <Link className="linkItems" to={'complete'}>
          complete
        </Link>
      </div>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="allTodo" index element={<AllTodo />} />
          <Route path="incomplete" element={<InComplete />} />
          <Route path="complete" element={<Complete />} />
        </Routes>
      </Suspense>
    </div>
  );
};
export default TodoHome;
