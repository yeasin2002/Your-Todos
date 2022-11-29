import React from 'react';
import checkDown from '../../../../assests/icons/chev-down.svg';

const ProfileMenuItems = ({
  theIcon,
  title = '',
  isArrowExist = true,
  bottomBorder = false,
}) => {
  let borderValue = bottomBorder ? ' border-b border-slate-700/40' : '';
  return (
    <div
      className={
        '   flex items-center justify-between p-4 cursor-pointer' + borderValue
      }
    >
      <div className=" gap-x-2 flex items-center">
        <span>
          <img src={theIcon} className=" w-6 h-6" />
        </span>
        <p>{title}</p>
      </div>

      {isArrowExist && (
        <img
          src={checkDown}
          alt="checkDown"
          className=" w-6 h-6 rotate-[261deg]"
        />
      )}
    </div>
  );
};

export default ProfileMenuItems;
