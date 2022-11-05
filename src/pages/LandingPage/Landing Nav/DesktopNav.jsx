import React from "react";

import MenuItems from "../../../components/MenuItems";

import homeIcon from "../../../assests/icons/home.svg";
import aboutUs from "../../../assests/icons/about-us.svg";
import HelpAndSupport from "../../../assests/icons/help-&-support.svg";
import { Link } from "react-router-dom";

const DesktopNav = () => {
  return (
    <>
      <div className="md:flex justify-between hidden">
        <div className="gap-x-4 flex">
          <MenuItems title={"Home"} theIcon={homeIcon} linkTo="/" />
          <MenuItems title={"About"} theIcon={aboutUs} linkTo="/about" />
          <MenuItems
            title={"help and support"}
            theIcon={HelpAndSupport}
            linkTo="helpAndSupport"
          />
        </div>
        <div className="gap-x-2 flex items-center ml-4">
          <Link to="login" className="bg-lightBlue  px-3 py-2 rounded-md">
            Log In
          </Link>
          <Link
            to="home"
            className="bg-primary text-gray-50  px-3 py-2 rounded-md"
          >
            start for Free
          </Link>
        </div>
      </div>
    </>
  );
};
export default DesktopNav;
