import React, { useEffect } from 'react';

const FinalSignIn = ({
  Avatar,
  FirstName,
  LastName,
  UserName,
  Password,
  SigInMail,
  OTP,
}) => {
  const FormHandler = e => {
    e.preventDefault();
    SentData();
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
        code: OTP,
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
    <input
      onClick={FormHandler}
      type="button"
      className="bg-primary w-full py-2 my-2 font-bold text-white rounded-lg cursor-pointer"
      value={'Enter '}
    />
  );
};

export default FinalSignIn;
