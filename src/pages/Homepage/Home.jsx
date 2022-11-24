import React, { useState } from 'react';
import useUserData from '../../hooks/useUserData';
import { UserContext } from '../../context/UserContext';

//  Routes
import TodoHomeRoute from './Todos/Layout/TodoHomeRoute';

//  shared Layout
import MobileNav from './Todos/Layout/MobileNav';
import MobileTopArea from './Todos/Layout/MobileTopArea';

//  pages components
import DesktopSidebar from './Todos/Layout/DesktopSidebar';

const Home = () => {
  const [IsSidebarShow, setIsSidebarShow] = useState(true);
  const userData = useUserData();

  return (
    <UserContext.Provider value={userData}>
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
    </UserContext.Provider>
  );
};

export default Home;
