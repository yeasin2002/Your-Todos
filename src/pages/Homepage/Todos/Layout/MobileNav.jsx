import React from 'react';
import { Link } from 'react-router-dom';

// assets
import homeIcon from '../../../../assests/icons/home.svg';
import notificationIcon from '../../../../assests/icons/bell.svg';
import searchIcon from '../../../../assests/icons/search.svg';
import plusIcon from '../../../../assests/icons/plus-icon.svg';
import ProfileIcon from '../../../../assests/icons/user.svg';

const MobileNav = () => {
  return (
    <nav className="bg-sky-250 md:hidden fixed bottom-0 left-0 flex justify-around w-full py-1">
      <Link to="/" className="flex flex-col items-center gap-2">
        <img src={homeIcon} alt="home" className="w-6 h-6" />
        <span>Home</span>
      </Link>

      <Link to="notification" className="flex flex-col items-center gap-2">
        <img src={notificationIcon} alt="home" className="w-6 h-6" />
        <span>notifications</span>
      </Link>

      {/* add todo - plus icon */}
      <div className="bottom-2 relative">
        <span className=" bg-primary inline-block p-4 rounded-full">
          <img src={plusIcon} alt="add todo " className="w-6 h-6" />
        </span>
      </div>

      <Link to="search" className="flex flex-col items-center gap-2">
        <img src={searchIcon} alt="home" className="w-6 h-6" />
        <span>Search</span>
      </Link>

      <Link to="profile" className="flex flex-col items-center gap-2">
        <img src={ProfileIcon} alt="home" className="w-6 h-6" />
        <span>Profile</span>
      </Link>
    </nav>
  );
};

export default MobileNav;
