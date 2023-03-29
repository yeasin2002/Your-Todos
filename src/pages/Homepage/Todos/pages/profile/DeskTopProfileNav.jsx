import React from 'react';
import accountIcon from '../../../../../assests/icons/account.svg';
import PreferencesIcon from '../../../../../assests/icons/Preferences.svg';
import { Link } from 'react-router-dom';

const DeskTopProfileNav = () => {
  return (
    <div className="md:flex bg-sky-250 gap-x-4 hidden py-2">
      <Link to={'AccountSettings'} className="gap-x-2 flex">
        <img src={accountIcon} alt="account" className="w-5" />
        <p>Account Settings</p>
      </Link>

      <Link to={'Preferences'} className="gap-x-2 flex">
        <img src={PreferencesIcon} alt="Preferences" className="w-5" />
        <p>Preferences</p>
      </Link>
    </div>
  );
};

export default DeskTopProfileNav;
