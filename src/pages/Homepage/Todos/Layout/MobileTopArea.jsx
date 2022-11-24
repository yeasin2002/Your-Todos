import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../context/UserContext';

import avatar from '../../../../assests/img/contributorProfilePic.jpg';

const MobileTopArea = () => {
  const usesData = useContext(UserContext);

  return (
    <div className="md:hidden bg-sky-250 flex justify-between px-2 py-4">
      <div className=" gap-x-2 flex">
        <div>
          <img
            src={avatar}
            alt="proFile pic "
            className="border-primary w-14 h-w-14 border-2 rounded-full"
          />
        </div>

        <div>
          <h6 className="text-md font-semibold text-gray-700">
            Good Afternoon
          </h6>
          <h3 className="text-primary text-xl font-bold">
            {usesData?.UserData?.data?.user.name}
          </h3>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default MobileTopArea;
