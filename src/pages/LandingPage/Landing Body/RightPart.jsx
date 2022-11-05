import React from "react";
import Desktop from "../../../assests/icons/Screenshot-Desktop.svg";
import Mobile from "../../../assests/icons/Frame-Mobile.svg";

const RightPart = () => {
  return (
    <div>
      <div>
        <div id="uper Picci "></div>
        <div>
          <div className="relative top-0 left-0 mt-20">
            <img src={Desktop} alt="Desktop" />
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
