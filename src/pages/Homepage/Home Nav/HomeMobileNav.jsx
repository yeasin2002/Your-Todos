import React, { useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';

//  assets / Icons
import PlusIcon from '../../../assests/icons/plus-icon.svg';
import HomeImg from '../../../assests/icons/home.svg';
import SearchIcon from '../../../assests/icons/search.svg';
import NotificationIcon from '../../../assests/icons/bell.svg';
import User from '../../../assests/icons/user.svg';

const HomeMobileNav = () => {
  useEffect(() => {
    <Navigate to={'/notification'} />;
  }, []);

  return (
    <nav className=" bg-ashed md:hidden fixed bottom-0 left-0 flex justify-around w-full pt-4">
      <Link to="todoHome" className="homeNavItems">
        <span>
          <img className="homeNavImg" src={HomeImg} alt="home" />
        </span>
        <p>Home</p>
      </Link>

      <Link to="search" className="homeNavItems">
        <span>
          <img className="homeNavImg" src={SearchIcon} alt="home" />
        </span>
        <p>Search</p>
      </Link>

      <div>
        <div className="homeNavItems bg-ashed bottom-7 relative left-0 p-2 rounded-full">
          <span className="bg-primary rounded-full">
            <img className=" h-w-14 w-14" src={PlusIcon} alt="home" />
          </span>
        </div>
      </div>

      <Link to="notification" className="homeNavItems">
        <span>
          <img
            className="homeNavImg"
            src={NotificationIcon}
            alt="Notification"
          />
        </span>
        <p>Notification</p>
      </Link>

      <Link to="profile" className="homeNavItems">
        <span>
          <img className="homeNavImg" src={User} alt="home" />
        </span>
        <p>Profile</p>
      </Link>
    </nav>
  );
};
export default HomeMobileNav;
