import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Hamburger from "../../../assests/icons/Hamburger.svg";
import cross from "../../../assests/icons/cross.svg";

const MobileNav = () => {
  const [MobileMenu, setMobileMenu] = useState(false);

  const MenuHandler = () => {
    setMobileMenu((pre) => !pre);
  };
  return (
    <div className="lg:hidden overflow-x-hidden">
      <img onClick={MenuHandler} src={Hamburger} alt={Hamburger + "logo"} />

      <AnimatePresence>
        {MobileMenu && (
          <motion.div
            initial={{ x: 50 }}
            animate={{ x: 0 }}
            exit={{ opacity: 50 }}
            className="w-[70vw] absolute top-0 right-0 h-screen bg-gray-200"
          >
            <div className="flex justify-end  m-4">
              <img onClick={MenuHandler} src={cross} alt={"cross"} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
