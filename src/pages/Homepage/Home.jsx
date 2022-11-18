import React, { useEffect, useState } from 'react';
import HomeDesktopNav from './Home Nav/HomeDesktopNav';
import { AnimatePresence, motion } from 'framer-motion';

//  components
import HomeMobileNav from './Home Nav/HomeMobileNav';
import TodoIndex from './Todos/todoIndex';
import Leave from '../../components/Leave';

const Home = () => {
  const [IsSidebarShow, setIsSidebarShow] = useState(true);

  useEffect(() => {
    let userData = localStorage.getItem('userToken');
    // FetchUserData(userData);
  }, []);

  const FetchUserData = userData => {
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${userData}`,
      },
    };

    fetch('https://baby-todo.onrender.com/user?settings=', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  };

  return (
    <div className="w-screen h-screen">
      <div className=" flex w-full h-full">
        <AnimatePresence>
          {IsSidebarShow ? (
            <HomeDesktopNav setIsSidebarShow={setIsSidebarShow} />
          ) : (
            <Leave setIsSidebarShow={setIsSidebarShow} />
          )}
        </AnimatePresence>
        <TodoIndex />
      </div>

      {/* nav bar start  */}
      <HomeMobileNav />
      {/* nav bar end  */}
    </div>
  );
};

export default Home;
