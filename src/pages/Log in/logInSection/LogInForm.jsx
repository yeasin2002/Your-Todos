import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import InputField from '../../../components/InputField';
// import useFetch from '../../../hooks/useFetch';
import { BaseUrl, EndPoints } from '../../../api/api';

const LogInForm = ({ setToForgotPass }) => {
  const [UserNameOrMail, setUserNameOrMail] = useState('');
  const [UserPassword, setUserPassword] = useState('');

  // log in event state
  const [IsLoading, setIsLoading] = useState('Log In ');
  const [IsError, setIsError] = useState(false);
  const [ErrorLog, setErrorLog] = useState('');

  const navigate = useNavigate();

  const ReDirect = () => {
    setToForgotPass(true);
  };

  //  form request handler while log in button is clicked
  const FormRequestAndGetJWT = async () => {
    try {
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

      const request = await fetch(BaseUrl + EndPoints.login, options);
      const ResponseData = await request.json();

      if (ResponseData.status == 'fail') {
        setIsError(true);
        setErrorLog(ResponseData?.message);
        setIsLoading('Log In ');
      } else {
        setIsLoading('Logged in');
        localStorage.setItem('userToken', ResponseData?.data?.token);
        return ResponseData?.data?.token;
      }
    } catch (error) {
      console.log(error);
    }
  };

  //  after getting the JWT  , Sending all data to  the context api
  const getUserDataAndSetToContext = async ({ token }) => {
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const request = await fetch(`${BaseUrl}/user?settings=`, options);
    const response = await request.json();
    console.log(response);
  };

  const LogInFetch = async () => {
    const data = await FormRequestAndGetJWT();
    getUserDataAndSetToContext(data);
  };

  const LogInHandler = () => {
    setErrorLog('');

    if (!UserNameOrMail | !UserPassword) return;
    setIsLoading('Loading............!');
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
            IsRequired={true}
          />

          <br />

          <InputField
            inputValue={UserPassword}
            inputValueHandler={setUserPassword}
            inputType={'password'}
            title={'Password '}
            placeholderValue={'*****'}
            labelFor={'userPassword'}
            IsRequired={true}
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
          <p className="md:my-2 lg:my-6 text-sm text-center">
            Already logged in?
            <Link
              to={'/sign_in'}
              className="text-md mx-2 font-bold text-blue-600"
            >
              Sign Up
            </Link>
          </p>
        </form>
        <div className=" mx-2 my-6 text-xl font-bold text-center text-red-700">
          {setIsError && ErrorLog}
        </div>
      </div>
    </motion.div>
  );
};
export default LogInForm;
