import React, { useState } from 'react';

import LogInDisplay from '../../components/LogInDisplay';
import SignInForm from './SignInForm';
import SignInOTP from './SignInOTP';

const SignIn = () => {
  const [AbleToGetOTP, setAbleToGetOTP] = useState(false);

  // sing in data from form
  const [Avatar, setAvatar] = useState();
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [UserName, setUserName] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPass, setConfirmPass] = useState('');

  return (
    <div>
      <div className="bg-primary md:p-16 w-screen h-screen p-10">
        <div className=" md:grid-cols-2 grid w-full h-full grid-cols-1 shadow-2xl">
          <LogInDisplay />

          {!AbleToGetOTP ? (
            <SignInForm
              setAbleToGetOTP={setAbleToGetOTP}
              Avatar={Avatar}
              FirstName={FirstName}
              LastName={LastName}
              UserName={UserName}
              Password={Password}
              ConfirmPass={ConfirmPass}
              setAvatar={setAvatar}
              setFirstName={setFirstName}
              setLastName={setLastName}
              setUserName={setUserName}
              setPassword={setPassword}
              setConfirmPass={setConfirmPass}
            />
          ) : (
            <SignInOTP
              setAbleToGetOTP={setAbleToGetOTP}
              Avatar={Avatar}
              FirstName={FirstName}
              LastName={LastName}
              UserName={UserName}
              Password={Password}
              ConfirmPass={ConfirmPass}
              //  setStates
              setAvatar={setAvatar}
              setFirstName={setFirstName}
              setLastName={setLastName}
              setUserName={setUserName}
              setPassword={setPassword}
              setConfirmPass={setConfirmPass}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
