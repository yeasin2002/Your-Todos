import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import getUserDataAndSetToContext from '../../utils/getUserDataAndSetToContext';

//  Routes
import TodoHomeRoute from './Todos/Layout/TodoHomeRoute';

//  shared Layout
import MobileNav from './Todos/Layout/MobileNav';

//  pages components
import DesktopSidebar from './Todos/Layout/DesktopSidebar';
import AddingNewTask from './Todos/Layout/AddingNewTask';
import { UserContext } from '../../context/UserContext';

const Home = () => {
  const [IsSidebarShow, setIsSidebarShow] = useState(false);
  const [NewTaskPopUpExist, setNewTaskPopUpExist] = useState(false);

  // let userData = localStorage.getItem('userData') || {};
  let data = getUserDataAndSetToContext();
  // console.log(data);

  return (
    <div>
      <h1>hello</h1>
    </div>
    // <UserContext.Provider value={{}}>
    //   <div className=" justify-between w-screen h-screen transition-all">
    //     <div className=" flex w-full">
    //       <DesktopSidebar
    //         setIsSidebarShow={setIsSidebarShow}
    //         IsSidebarShow={IsSidebarShow}
    //         setNewTaskPopUpExist={setNewTaskPopUpExist}
    //       />

    //       {/* <DeskTopNav /> */}
    //       <TodoHomeRoute />
    //     </div>

    //     <div>
    //       <MobileNav setNewTaskPopUpExist={setNewTaskPopUpExist} />
    //     </div>
    //   </div>

    //   <AnimatePresence>
    //     {NewTaskPopUpExist && (
    //       <AddingNewTask setNewTaskPopUpExist={setNewTaskPopUpExist} />
    //     )}
    //   </AnimatePresence>
    // </UserContext.Provider>
  );
};

export default Home;
