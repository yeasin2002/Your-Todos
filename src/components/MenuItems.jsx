import React from "react";
import { Link } from "react-router-dom";

const MenuItems = ({ title, theIcon, linkTo, active }) => {
  let col = active ? "text-[#406BBF] " : "";

  return (
    <>
      <Link to={linkTo}>
        <div className="gap-x-1 flex items-center">
          <span>
            <img className={` w-5 `} src={theIcon} alt={title + "Icon"} />
          </span>
          <p className={` text-bold  ${col}`}>{title}</p>
        </div>
      </Link>
    </>
  );
};

export default MenuItems;
