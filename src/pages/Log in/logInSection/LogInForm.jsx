import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import InputField from '../../../components/InputField';
import useFetch from '../../../hooks/useFetch';

const LogInForm = ({ ToForgotPass, setToForgotPass }) => {
  const [UserName, setUserName] = useState('');
  const [UserMail, setUserMail] = useState('');

  const formHandler = e => {
    e.preventDefault();
  };

  const ReDirect = () => {
    setToForgotPass(true);
  };

  const LogInFetch = () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: 'mdkawsarislam2002@gmail.com' }),
    };
    let BaseURL = ` https://young-coders-todo-app.herokuapp.com/v1/`;

    fetch(`${BaseURL}account/request-email-verify`, options)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    // LogInFetch();
  }, []);

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
        <form className="mt-10" onSubmit={formHandler}>
          <InputField
            inputValue={UserName}
            inputValueHandler={setUserName}
            inputType={'text'}
            title={'Email or Username'}
            placeholderValue={'mdkawsarislam2002@example.com'}
            labelFor={'userName'}
          />

          <br />

          <InputField
            inputValue={UserMail}
            inputValueHandler={setUserMail}
            inputType={'password'}
            title={'Password '}
            placeholderValue={'*****'}
            labelFor={'userPassword'}
          />
          <p className="text-primary text-sm cursor-pointer" onClick={ReDirect}>
            Forgot Password{' '}
          </p>

          <button className="bg-primary w-full py-2 mt-4 text-white">
            Log In
          </button>
          <p className="text-sm text-center">Already logged in? Sign Up</p>
        </form>
      </div>
    </motion.div>
  );
};
export default LogInForm;
