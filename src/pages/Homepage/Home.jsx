import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { AnimatePresence } from 'framer-motion';

//  Routes
import TodoHomeRoute from './Todos/Layout/TodoHomeRoute';

//  shared Layout
import MobileNav from './Todos/Layout/MobileNav';

// hooks
import useUserData from '../../hooks/useUserData';

//  pages components
import DesktopSidebar from './Todos/Layout/DesktopSidebar';
import AddingNewTask from './Todos/Layout/AddingNewTask';

const Home = () => {
  const [IsSidebarShow, setIsSidebarShow] = useState(false);
  const [NewTaskPopUpExist, setNewTaskPopUpExist] = useState(false);

  const userData = useUserData();
  const navigate = useNavigate();

  // if (userData.UserData.status === 'fail') {
  //   return navigate('/login');
  // }

  return (
    <UserContext.Provider value={userData}>
      <div className=" justify-between w-screen h-screen transition-all">
        <div className=" flex w-full">
          <DesktopSidebar
            setIsSidebarShow={setIsSidebarShow}
            IsSidebarShow={IsSidebarShow}
            setNewTaskPopUpExist={setNewTaskPopUpExist}
          />

          {/* <DeskTopNav /> */}
          <TodoHomeRoute />
        </div>

        <div>
          <MobileNav setNewTaskPopUpExist={setNewTaskPopUpExist} />
        </div>
      </div>

      <AnimatePresence>
        {NewTaskPopUpExist && (
          <AddingNewTask setNewTaskPopUpExist={setNewTaskPopUpExist} />
        )}
      </AnimatePresence>
    </UserContext.Provider>
  );
};

export default Home;
