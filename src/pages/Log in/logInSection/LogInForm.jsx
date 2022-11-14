import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import InputField from '../../../components/InputField';
import useFetch from '../../../hooks/useFetch';

const LogInForm = ({ ToForgotPass, setToForgotPass }) => {
  const [UserNameOrMail, setUserNameOrMail] = useState('');
  const [UserPassword, setUserPassword] = useState('');

  // log in event state
  const [IsLoading, setIsLoading] = useState('Log In ');
  const [IsError, setIsError] = useState(false);
  const [ErrorLog, setErrorLog] = useState('');

  const ReDirect = () => {
    setToForgotPass(true);
  };

  const LogInFetch = () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login: UserNameOrMail,
        password: UserPassword,
      }),
    };
    let BaseURL = ` https://young-coders-todo-app.herokuapp.com/v1/`;

    fetch(`${BaseURL}/account/login`, options)
      .then(response => response.json())
      .then(data => {
        if (data.status == 'fail') {
          setIsError(true);
          setErrorLog(data.message);
          setIsLoading('Log In ');
        } else {
          setIsLoading('Logged in   ');
        }
      })
      .catch(err => console.error(err));
  };

  const LogInHandler = e => {
    setIsLoading('Loading............!');
    setErrorLog('');
    LogInFetch();
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
        <form className="mt-10" onSubmit={e => e.preventDefault()}>
          <InputField
            inputValue={UserNameOrMail}
            inputValueHandler={setUserNameOrMail}
            inputType={'text'}
            title={'Email or Username'}
            placeholderValue={'mdkawsarislam2002@example.com'}
            labelFor={'userName'}
          />

          <br />

          <InputField
            inputValue={UserPassword}
            inputValueHandler={setUserPassword}
            inputType={'password'}
            title={'Password '}
            placeholderValue={'*****'}
            labelFor={'userPassword'}
          />
          <p className="text-primary text-sm cursor-pointer" onClick={ReDirect}>
            Forgot Password{' '}
          </p>

          <button
            onClick={LogInHandler}
            className="bg-primary w-full py-2 mt-4 text-white rounded-md"
          >
            {IsLoading}
          </button>
          <p className="text-sm text-center">Already logged in? Sign Up</p>
        </form>
        <div className=" mx-2 my-6 text-xl font-bold text-center text-red-700">
          {setIsError && ErrorLog}
        </div>
      </div>
    </motion.div>
  );
};
export default LogInForm;
