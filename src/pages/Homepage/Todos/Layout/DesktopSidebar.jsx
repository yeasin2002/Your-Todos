import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { UserContext } from '../../../../context/UserContext';

//  assets / Icons
import PlusIcon from '../../../../assests/icons/plus-icon.svg';
import HomeImg from '../../../../assests/icons/home.svg';
import SearchIcon from '../../../../assests/icons/search.svg';
import NotificationIcon from '../../../../assests/icons/bell.svg';
import User from '../../../../assests/icons/user.svg';
import LogOut from '../../../../assests/icons/logout.svg';
import LinkIcon from '../../../../assests/icons/link-copy.svg';

import gitHubIcon from '../../../../assests/icons/github.svg';
import About from '../../../../assests/icons/about-us.svg';
import Help from '../../../../assests/icons/help-&-support.svg';
import Leave from '../../../../assests/icons/Leave.svg';
import useGetTime from '../../../../hooks/usegetTime';

let profile = `https://th.bing.com/th/id/OIP.U0jepfI2xnjVrBZIfQ-DaQHaFe?pid=ImgDet&rs=1`;

const goLogOut = () => {
  // clear localStorage
  console.log('log out ');
};

const DesktopSidebar = ({
  setIsSidebarShow,
  IsSidebarShow,
  setNewTaskPopUpExist,
}) => {
  const [userAccountData, setUserAccountData] = useState({
    email: 'example@gmail.com',
    name: 'name',
    id: '',
  });
  const usesData = useContext(UserContext);
  const GetTime = useGetTime();

  useEffect(() => {
    if (usesData?.UserData.status) {
      setUserAccountData({
        ...userAccountData,
        email: usesData?.UserData?.data?.user.email,
        name: usesData?.UserData?.data?.user.name,
        id: usesData?.UserData?.data?.user._id,
      });
    }
  }, []);

  const copyHandler = e => {
    // userAccountData.id
    console.log('copy ');
  };
  return (
    <>
      {IsSidebarShow ? (
        <motion.nav
          initial={{
            x: '-100',
          }}
          animate={{
            x: 0,
          }}
          exit={{
            x: '-100',
          }}
          className=" border  min-w-[20vw]   hidden md:block  fixed left-0 top-0 bg-white h-full"
        >
          <div className=" flex flex-col items-center justify-center">
            <img
              className="border-primary w-16 h-16 border-4 rounded-full"
              src={profile}
              alt=" avatar"
            />
            <h4 className="text-primary text-base">{GetTime} ,</h4>
            <h2 className="text-primary 2xl:text-5xl lg:text-xl xl:text-2xl font-bold">
              {userAccountData.name}
            </h2>

            <div
              onClick={copyHandler}
              className=" gap-x-2 flex items-center px-2 py-1 bg-white rounded-lg"
            >
              copy handler
              {/* _id */}
              <span>
                <img src={LinkIcon} alt="copy userName" />
              </span>
            </div>
          </div>

          <button
            onClick={() => setNewTaskPopUpExist(true)}
            className="bg-primary gap-x-2 flex items-center justify-center w-11/12 py-2 mx-auto font-semibold text-white rounded-lg"
          >
            Add Task
            <span>
              <img src={PlusIcon} alt="Add Task " />
            </span>
          </button>

          {/* menu  */}
          <div className="mx-4 my-6">
            <Link to="/" className="desktopMenuDiv">
              <span>
                <img className="desktopMenuIcon" src={HomeImg} alt="Home " />
              </span>
              <p className="desktopMenuPara">Home</p>
            </Link>

            <Link to="search" className="desktopMenuDiv">
              <span>
                <img className="desktopMenuIcon" src={SearchIcon} alt="Home " />
              </span>
              <p className="desktopMenuPara">Search</p>
            </Link>

            <Link to="notification" className="desktopMenuDiv">
              <span>
                <img
                  className="desktopMenuIcon"
                  src={NotificationIcon}
                  alt="Home "
                />
              </span>
              <p className="desktopMenuPara">Notification</p>
            </Link>

            <Link to="profile" className="desktopMenuDiv">
              <span>
                <img className="desktopMenuIcon" src={User} alt="Home " />
              </span>
              <p className="desktopMenuPara">Profile </p>
            </Link>

            {/* logout  */}
            <div className="desktopMenuDiv mt-4" onClick={goLogOut}>
              <span>
                <img className="desktopMenuIcon" src={LogOut} alt="Home " />
              </span>
              <p className="desktopMenuPara">Log Out </p>
            </div>
          </div>

          {/*  bottom area */}

          <div className=" flex items-center justify-around w-full pb-8">
            <div className=" gap-x-2 flex">
              <Link to="/about">
                <img className="w-6" src={About} alt="About" />
              </Link>
              <Link to="/helpAndSupport">
                <img className="w-6" src={Help} alt="Help" />
              </Link>
              <a href="https://github.com/Mdkawsarislam2002" target="_blank">
                <img className="w-6" src={gitHubIcon} alt="github id " />
              </a>
            </div>
            <div className=" mr-4 cursor-pointer">
              <img
                src={Leave}
                alt="leave sidebar "
                onClick={() => {
                  setIsSidebarShow(false);
                }}
              />
            </div>
          </div>
        </motion.nav>
      ) : (
        <div className="bg-slate-800 bottom-2 left-1 fixed mr-4 rounded-md cursor-pointer">
          <img
            src={Leave}
            alt="leave sidebar "
            onClick={() => {
              setIsSidebarShow(true);
            }}
          />
        </div>
      )}
    </>
  );
};

export default DesktopSidebar;
