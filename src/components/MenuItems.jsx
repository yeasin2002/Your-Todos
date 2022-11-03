import React from "react";

const MenuItems = ({ title, theIcon }) => {
  return (
    <div className="flex items-center gap-x-1">
      <span>
        <img className="w-5  " src={theIcon} alt={title + "Icon"} />
      </span>
      <p className="text-secondary">{title}</p>
    </div>
  );
};

export default MenuItems;
