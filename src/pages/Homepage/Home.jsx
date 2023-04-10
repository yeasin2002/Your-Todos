import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// import getUserDataAndSetToContext from '../../utils/getUserDataAndSetToContext';

//  Routes
import TodoHomeRoute from './Todos/Layout/TodoHomeRoute';

//  shared Layout
import MobileNav from './Todos/Layout/MobileNav';

//  pages components
import DesktopSidebar from './Todos/Layout/DesktopSidebar';
import AddingNewTask from './Todos/Layout/AddingNewTask';
import { UserContext } from '../../context/UserContext';
import { BaseUrl } from '../../api/api';

const Home = () => {
  const [userData, setUserData] = useState({});
  const [IsSidebarShow, setIsSidebarShow] = useState(false);
  const [NewTaskPopUpExist, setNewTaskPopUpExist] = useState(false);

  const getUserDataAndSetToContext = async () => {
    let token = localStorage.getItem('userToken') || '';

    try {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };

      const request = await fetch(`${BaseUrl}/user?settings=`, options);
      const response = await request.json();

      if (response?.status == 'success') {
        setUserData(response.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getUserDataAndSetToContext();
  }, []);

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
