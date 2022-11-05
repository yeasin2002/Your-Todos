import React, { useContext } from "react";

import check from "../../../assests/icons/TickLogo.svg";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import Logo from "../../../layouts/Logo";

const LandingNav = () => {
  return (
    <nav className="lg:mx-14 flex items-center justify-between mx-6 my-4">
      <Logo />

      {/* menu */}

      {/* for Desktop */}
      <DesktopNav />
      {/* for Mobile */}
      <MobileNav />
    </nav>
  );
};
export default LandingNav;
