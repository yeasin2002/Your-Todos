import React from 'react';
import { motion } from 'framer-motion';

import InputField from '../../../components/InputField';

const LogInForm = ({ ToForgotPass, setToForgotPass }) => {
  const ReDirect = () => {
    setToForgotPass(true);
  };
  return (
    <motion.div
      initial={{
        x: '-100',
      }}
      animate={{
        x: 0,
      }}
      exit={{
        x: '-100',
      }}
      transition={{
        stiffness: 50,
      }}
      className="logInSec md:p-14 px-6 py-10 bg-gray-100"
    >
      <div>
        <h2 className="text-secondary lg:text-4xl text-2xl font-bold">
          Log In
        </h2>
      </div>
      <div>
        <form className="mt-10">
          <InputField
            inputType={'text'}
            title={'Email or Username'}
            placeholderValue={'mdkawsarislam2002@example.com'}
            labelFor={'userName'}
          />

          <br />

          <InputField
            inputType={'password'}
            title={'Password '}
            placeholderValue={'*****'}
            labelFor={'userPassword'}
          />
          <p className="text-primary text-sm cursor-pointer" onClick={ReDirect}>
            Forgot Password{' '}
          </p>

          <button type="submit" className="bg-primary w-full py-2 mt-4">
            Log In
          </button>
          <p className="text-sm text-center">Already logged in? Sign Up</p>
        </form>
      </div>
    </motion.div>
  );
};
export default LogInForm;
