import React, { useContext } from "react";

import check from "../../../assests/icons/TickLogo.svg";
import Hamburger from "../../../assests/icons/Hamburger.svg";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const LandingNav = () => {
  return (
    <nav className="flex justify-between items-center lg:mx-14 mx-6 my-4">
      <div className=" flex  items-center text-2xl font-bold ">
        <div className="bg-primary  my-2 pl-1 mr-2">
          <img className="rounded-lg" src={check} alt="Logo " />
        </div>
        <h1>Todo </h1>
      </div>

      {/* menu */}

      {/* for Desktop */}
      <DesktopNav />
      {/* for Mobile */}
      <MobileNav />
    </nav>
  );
};

export default LandingNav;
