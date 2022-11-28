import React, { useState } from 'react';
import threeDotMenu from '../../../../assests/icons/threeDotMenu.svg';

const PerNotifications = () => {
  const [isPopUpShow, setIsPopUpShow] = useState(false);
  const popUpHandler = e => {
    setIsPopUpShow(preState => !preState);
  };

  let demoImgLink = `https://th.bing.com/th/id/OIP.QsTQiIXafX4lsEPvCmognAHaHS?pid=ImgDet&rs=1`;
  return (
    <div className=" bg-sky-250 gap-x-2 top-0left-0 relative flex items-center justify-between px-4 py-2 m-2 rounded-md">
      <img
        src={demoImgLink}
        className="w-10 h-10 rounded-full"
        alt="userprofile"
      />
      <p className="flex-1">You crated a task </p>
      <span onClick={popUpHandler} className="p-2 cursor-pointer">
        <img src={threeDotMenu} alt="menu " />
      </span>

      {isPopUpShow && (
        <div className=" 0 right-1 absolute bottom-0 p-2 text-slate-700 cursor-help bg-[#D9E1F2] rounded-md">
          <p onClick={popUpHandler}>Mark as read</p>
          <p onClick={popUpHandler}>Delete</p>
        </div>
      )}
    </div>
  );
};

export default PerNotifications;
