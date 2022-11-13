import React, { useEffect } from 'react';
import { useState } from 'react';
import LeftArrow from '../../components/Icons/LeftArrow';
import InputField from '../../components/InputField';
import GetOTP_btn from './GetOTP_btn';

const SignInOTP = ({
  setAbleToGetOTP,

  Avatar,
  FirstName,
  LastName,
  UserName,
  Password,
  ConfirmPass,

  // set Stats
  setAvatar,
  setFirstName,
  setLastName,
  setUserName,
  setPassword,
  setConfirmPass,
}) => {
  const [SigInMail, setSigInMail] = useState('');
  const [OTP, setOTP] = useState(0);
  const [IsGetOTP, setIsGetOTP] = useState(false);

  const FormHandler = e => {
    e.preventDefault();
    console.log('enter');
  };

  //  fetch data
  const SentData = () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authentication: 'Bearer<jwt-token>',
      },
      body: JSON.stringify({
        email: SigInMail,
        username: UserName,
        name: FirstName + ' ' + LastName,
        avatar: Avatar,
        password: Password,
        code: '',
      }),
    };
    let BaseURL = ` https://young-coders-todo-app.herokuapp.com/v1/`;

    fetch(`${BaseURL}account/signup`, options)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.error(err));
  };
  useEffect(() => {
    // SentData();
  }, []);

  return (
    <div className="logInSec md:p-6 px-6 py-10 bg-gray-100">
      <div className="flex justify-between">
        <div
          onClick={() => {
            setAbleToGetOTP(false);
          }}
          className="bg-lightBlue hover:bg-blue-200 p-3 transition-all rounded-full cursor-pointer"
        >
          <LeftArrow />
        </div>
        <p className="text-primary p-3 font-bold cursor-pointer">Go Back</p>
      </div>
      <form className="my-20" onSubmit={FormHandler}>
        <InputField
          title={'Email'}
          labelFor="Email"
          placeholderValue={'john.doe@example.com'}
          inputType="email"
          IsRequired={true}
          inputValue={SigInMail}
          inputValueHandler={setSigInMail}
        />

        {IsGetOTP && (
          <InputField
            title={'Code'}
            labelFor="otpCode"
            placeholderValue={''}
            inputType="number"
            inputValue={OTP}
            inputValueHandler={setOTP}
          />
        )}
        {!IsGetOTP ? (
          <GetOTP_btn
            IsGetOTP={IsGetOTP}
            setIsGetOTP={setIsGetOTP}
            SigInMail={SigInMail}
            setSigInMail={setSigInMail}
          />
        ) : (
          <input
            onClick={FormHandler}
            type="button"
            className="bg-primary w-full py-2 my-2 font-bold text-white rounded-lg cursor-pointer"
            value={'Enter '}
          />
        )}
        {IsGetOTP && (
          <p className="text-secondary my-4 text-base font-semibold text-center">
            Send again in 58 seconds
          </p>
        )}
      </form>
    </div>
  );
};

export default SignInOTP;
