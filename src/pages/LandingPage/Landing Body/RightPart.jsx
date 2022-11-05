import React from "react";
import Desktop from "../../../assests/icons/Screenshot-Desktop.svg";
import Mobile from "../../../assests/icons/Frame-Mobile.svg";
import Freddy from "../../../assests/img/Freddy.svg";

const RightPart = () => {
  return (
    <div>
      <div className="relative top-0 left-0 mx-4 mt-20">
        <div id="Freddy" className="flex justify-end mx-4">
          <img src={Freddy} alt="Freddy" />
        </div>
        <div>
          <div className="mx-4">
            <img src={Desktop} alt="Desktop" className=" w-full" />
            <img
              src={Mobile}
              alt="Mobile"
              className="absolute bottom-0 left-0 w-48"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightPart;
