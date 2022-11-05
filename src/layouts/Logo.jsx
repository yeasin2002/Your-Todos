import React from "react";
import check from "../assests/icons/TickLogo.svg";

const Logo = () => {
  return (
    <div className=" flex items-center text-2xl font-bold">
      <div className="bg-primary pl-1 my-2 mr-2">
        <img className="rounded-lg select-none" src={check} alt="Logo " />
      </div>
      <h1 className="text-primary">Todo </h1>
    </div>
  );
};

export default Logo;
