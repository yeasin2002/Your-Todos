import React from 'react';
import Desktop from '../../../assests/icons/Screenshot-Desktop.svg';
import Mobile from '../../../assests/icons/Frame-Mobile.svg';
import Freddy from '../../../assests/img/Freddy.svg';

const RightPart = () => {
  return (
    <div>
      <div className="relative top-0 left-0 block mx-4 mt-20">
        <div id="Freddy" className="md:flex justify-end hidden mx-4">
          <img src={Freddy} alt="Freddy" />
        </div>
        <div>
          <div className="mx-4">
            <img
              src={Desktop}
              alt="Desktop"
              className=" md:block hidden w-full"
            />
            <img
              src={Mobile}
              alt="Mobile"
              className="md:absolute md:w-48 md:z-0 bottom-0 left-0 z-50 w-3/4 mx-auto text-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightPart;
