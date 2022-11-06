import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import LeftArrow from '../../../components/Icons/LeftArrow';
import InputField from '../../../components/InputField';

const ChangePass = ({ ToForgotPass, setToForgotPass }) => {
  const ReDirect = () => {
    setToForgotPass(false);
  };
  return (
    <motion.div
      initial={{
        x: '100',
      }}
      animate={{
        x: 0,
      }}
      exit={{
        x: '100',
      }}
      transition={{
        stiffness: 50,
      }}
    >
      <div className="logInSec md:p-14 px-6 py-10 bg-gray-100">
        <div className="flex justify-between">
          <div
            className="hover:bg-blue-200 p-2 transition-all bg-transparent rounded-full"
            onClick={ReDirect}
          >
            <LeftArrow />
          </div>
          <div>
            <p className="text-primary font-bold">Go Back</p>
          </div>
        </div>
        <div>
          <form className="mt-10">
            <InputField
              inputType={'password'}
              title={'Enter New Password '}
              placeholderValue={'****'}
              labelFor={'NewPass'}
            />
            <br />

            <InputField
              inputType={'password'}
              title={'Confirm New Password '}
              placeholderValue={'*****'}
              labelFor={'userPassword'}
            />

            <button type="submit" className="bg-primary w-full py-2 mt-4">
              Log In
            </button>
            <p className="my-4 text-sm text-center">
              Already logged in?
              <Link to="/sign_in">
                <span className="text-primary mx-2 font-semibold">Sign Up</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </motion.div>
  );
};
export default ChangePass;
