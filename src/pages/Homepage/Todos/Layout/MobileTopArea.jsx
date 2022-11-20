import React from 'react';

import avatar from '../../../../assests/img/contributorProfilePic.jpg';
const MobileTopArea = () => {
  return (
    <div className="md:hidden flex justify-between px-4 mx-2 my-4">
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
          <h3 className="text-primary text-xl font-bold">Name</h3>
        </div>
      </div>

      <div>dark mode</div>
    </div>
  );
};

export default MobileTopArea;
