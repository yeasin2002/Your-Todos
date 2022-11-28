import React from 'react';
import contributorProfilePic from '../../../../../assests/img/contributorProfilePic.jpg';
import LinkIcon from '../../../../../assests/icons/link-copy.svg';

const MobileProfileView = () => {
  return (
    <div className="md:hidden">
      <div className=" bg-sky-250 flex flex-col items-center justify-center py-2">
        <img
          className="border-primary w-16 h-16 border-4 rounded-full"
          src={contributorProfilePic}
          alt=" avatar"
        />
        <h4 className="text-primary text-base">Good Afternoon ,</h4>
        <h2 className="text-primary 2xl:text-5xl lg:text-xl xl:text-2xl font-bold">
          {'userAccountData.name'}
        </h2>

        <div className=" gap-x-2 flex items-center px-2 py-1 bg-white rounded-lg">
          copy handler
          {/* _id */}
          <span>
            <img src={LinkIcon} alt="copy userName" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default MobileProfileView;
