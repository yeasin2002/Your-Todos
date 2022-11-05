import React, { useContext } from "react";

import check from "../../../assests/icons/TickLogo.svg";
import Hamburger from "../../../assests/icons/Hamburger.svg";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const LandingNav = () => {
  return (
    <nav className="lg:mx-14 flex items-center justify-between mx-6 my-4">
      <div className=" flex items-center text-2xl font-bold">
        <div className="bg-primary pl-1 my-2 mr-2">
          <img className="rounded-lg select-none" src={check} alt="Logo " />
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
