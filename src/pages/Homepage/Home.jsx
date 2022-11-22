import React from 'react';
import DeskTopNav from './Todos/Layout/DeskTopNav';

import MobileNav from './Todos/Layout/MobileNav';
import MobileTopArea from './Todos/Layout/MobileTopArea';
import TodoHomeRoute from './Todos/Layout/TodoHomeRoute';
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
