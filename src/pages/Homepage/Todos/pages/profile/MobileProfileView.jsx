import React, { useContext } from 'react';

// components
import ProfileMenuItems from '../../compontns/ProfileMenuItems';

// assets
import contributorProfilePic from '../../../../../assests/img/contributorProfilePic.jpg'; // temporary

import LinkIcon from '../../../../../assests/icons/link-copy.svg';

import account from '../../../../../assests/icons/account.svg';
import Preferences from '../../../../../assests/icons/Preferences.svg';

import aboutUs from '../../../../../assests/icons/about-us.svg';
import helpAndSupport from '../../../../../assests/icons/help-&-support.svg';

import LogOut from '../../../../../assests/icons/logout.svg';
import DeleteAccount from '../../../../../assests/icons/delete-account.svg';
import { UserContext } from '../../../../../context/UserContext';

const MobileProfileView = () => {
  let userData = useContext(UserContext);
  console.log(userData?.user);
  return (
    <div className="md:hidden ">
      <div className=" bg-sky-250 flex flex-col items-center justify-center py-2">
        <img
          className="border-primary w-16 h-16 border-4 rounded-full"
          src={contributorProfilePic}
          alt=" avatar"
        />
        <h4 className="text-primary text-base">Good Afternoon ,</h4>
        <h2 className="text-primary 2xl:text-5xl lg:text-xl xl:text-2xl font-bold">
          {userData?.user?.name}
        </h2>

        <div className=" gap-x-2 flex items-center px-2 py-1 bg-white rounded-lg">
          copy handler
          {/* _id */}
          <span>
            <img src={LinkIcon} alt="copy userName" />
          </span>
        </div>
      </div>

      <div className="mx-6 my-10 mb-20">
        {/* Account */}
        <div className="my-2">
          <p className="my-2 text-xl font-bold">General</p>
          <div className="bg-Shades-100 rounded-md">
            <ProfileMenuItems
              theIcon={account}
              title={'Account Settings'}
              bottomBorder={true}
            />
            <ProfileMenuItems theIcon={Preferences} title={'Preferences'} />
          </div>
        </div>

        {/* Information */}
        <div className="my-2">
          <p className="my-2 text-xl font-bold">Information</p>
          <div className="bg-Shades-100 rounded-md">
            <ProfileMenuItems
              theIcon={aboutUs}
              title={'About Us '}
              bottomBorder={true}
            />
            <ProfileMenuItems
              theIcon={helpAndSupport}
              title={'Help And Support'}
            />
          </div>
        </div>

        {/*Danger Zone  */}
        <div className="my-2">
          <p className="my-2 text-xl font-bold">Information</p>
          <div className="bg-Shades-100 rounded-md">
            <ProfileMenuItems
              theIcon={LogOut}
              title={'Log Out '}
              bottomBorder={true}
              isArrowExist={false}
            />
            <ProfileMenuItems
              theIcon={DeleteAccount}
              title={'Delete Account'}
              isArrowExist={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileProfileView;
