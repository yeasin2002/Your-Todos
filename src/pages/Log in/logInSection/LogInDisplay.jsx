import React from 'react';
import Logo from '../../../layouts/Logo';
import LogInDisplayIcon from '../../../assests/img/LogInDisplay.svg';
import gitHubIcon from '../../../assests/icons/github.svg';
import { Link } from 'react-router-dom';

const LogInDisplay = () => {
  return (
    <div
      className="logInSec bg-slate-700 md:block hidden h-full"
      style={{
        backgroundImage: `url(${LogInDisplayIcon})`,
      }}
    >
      <div className=" bg-slate-700/90 flex flex-col justify-between w-full h-full px-8 py-4 shadow-xl">
        <div>
          <Logo />
          <h2 className="text-lightBlue flex flex-col justify-between mt-4 text-3xl font-bold">
            Let us be a tiny little part of your life
          </h2>
        </div>

        {/* bottom menu  */}
        <div className="flex justify-between">
          <ul className="justify-evenly gap-x-2 flex">
            <li className="text-lightBlue text-sm">
              <Link to="/">Home</Link>
            </li>
            <li className="text-lightBlue text-sm">
              <Link to="/about">About Us</Link>
            </li>
            <li className="text-lightBlue text-sm">
              <Link to="/helpAndSupport">Help And Support</Link>
            </li>
          </ul>

          <span>
            <a target={'_blank'} href=" https://github.com/Mdkawsarislam2002">
              <img
                src={gitHubIcon}
                alt="GitHub"
                className="bg-white rounded-full"
              />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};
export default LogInDisplay;
