import React from 'react';
import LogInDisplay from '../../components/LogInDisplay';
import SignInForm from './SignInForm';
import SignInOTP from './SignInOTP';

const SignIn = () => {
  return (
    <div>
      <div className="bg-primary md:p-16 w-screen h-screen p-10">
        <div className=" md:grid-cols-2 grid w-full h-full grid-cols-1">
          <LogInDisplay />
          {/* <SignInForm /> */}
          <SignInOTP />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
