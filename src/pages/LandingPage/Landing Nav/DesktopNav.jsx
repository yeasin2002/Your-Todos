import React from "react";

import MenuItems from "../../../components/MenuItems";

import homeIcon from "../../../assests/icons/home.svg";
import aboutUs from "../../../assests/icons/about-us.svg";
import HelpAndSupport from "../../../assests/icons/help-&-support.svg";

const DesktopNav = () => {
  return (
    <>
      <div className="md:flex justify-between hidden">
        <div className="flex gap-x-4">
          <MenuItems title={"Home"} theIcon={homeIcon} />
          <MenuItems title={"About"} theIcon={aboutUs} />
          <MenuItems title={"help and support"} theIcon={HelpAndSupport} />
        </div>
        <div className="ml-4 flex items-center gap-x-2">
          <button className="bg-lightBlue   px-3 py-2 rounded-md  ">
            Log In
          </button>
          <button className="bg-primary text-gray-50   px-3 py-2 rounded-md  ">
            start for Free
          </button>
        </div>
      </div>
    </>
  );
};

export default DesktopNav;
