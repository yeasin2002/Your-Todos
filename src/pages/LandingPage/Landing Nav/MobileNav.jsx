import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Hamburger from "../../../assests/icons/Hamburger.svg";
import SideBar from "./SideBar";

const MobileNav = () => {
  const [MobileMenu, setMobileMenu] = useState(false);

  const MenuHandler = () => {
    setMobileMenu((pre) => !pre);
  };
  return (
    <div className="md:hidden overflow-x-hidden">
      <img
        className=" cursor-pointer"
        onClick={MenuHandler}
        src={Hamburger}
        alt={Hamburger + "logo"}
      />

      {/* sideBar */}
      <SideBar MenuHandler={MenuHandler} MobileMenu={MobileMenu} />
    </div>
  );
};

export default MobileNav;
