import React from "react";
import { Link } from "react-router-dom";

const SideBarItems = ({ sideIcon, title, linkTo, csStyle = "" }) => {
  return (
    <Link to={linkTo}>
      <div
        className={`flex gap-x-4 py-4 px-2  my-4 mx-2 rounded-lg ${csStyle}`}
      >
        <img className="w-5 h-5" src={sideIcon} alt={sideIcon} />
        <p>{title} </p>
      </div>
    </Link>
  );
};

export default SideBarItems;
