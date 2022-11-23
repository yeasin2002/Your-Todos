import React, { useState } from 'react';

//  Routes
import TodoHomeRoute from './Todos/Layout/TodoHomeRoute';

//  shared Layout
import MobileNav from './Todos/Layout/MobileNav';
import MobileTopArea from './Todos/Layout/MobileTopArea';

//  pages components
import DesktopSidebar from './Todos/Layout/DesktopSidebar';

const Home = () => {
  const [IsSidebarShow, setIsSidebarShow] = useState(true);
  return (
    <div className=" justify-between w-screen h-screen transition-all">
      <MobileTopArea />

      <div className=" flex w-full">
        <DesktopSidebar
          setIsSidebarShow={setIsSidebarShow}
          IsSidebarShow={IsSidebarShow}
        />
        {/* <DeskTopNav /> */}
        <TodoHomeRoute />
      </div>

      <div>
        <MobileNav />
      </div>
    </div>
  );
};

export default Home;
