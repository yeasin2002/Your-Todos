import React from 'react';
import LeftArrow from '../../components/Icons/LeftArrow';
import InputField from '../../components/InputField';

const SignInOTP = () => {
  return (
    <div className="logInSec md:p-6 px-6 py-10 bg-gray-100">
      <div className="flex justify-between">
        <div className="bg-lightBlue hover:bg-blue-200 p-3 transition-all rounded-full cursor-pointer">
          <LeftArrow />
        </div>
        <p className="text-primary p-3 font-bold cursor-pointer">Go Back</p>
      </div>
      <form className="my-20">
        <InputField
          title={'Email'}
          labelFor="Email"
          placeholderValue={'john.doe@example.com'}
          inputType="email"
          IsRequired={true}
        />

        <InputField
          title={'Code'}
          labelFor="otpCode"
          placeholderValue={''}
          inputType="number"
          IsRequired={true}
        />
        <input
          type="submit"
          className="bg-primary w-full py-2 my-2 rounded-lg cursor-pointer"
          value={'Send OTP'}
        />
        <p className="text-secondary my-4 text-base font-semibold text-center">
          Send again in 58 seconds
        </p>
      </form>
    </div>
  );
};

export default SignInOTP;
