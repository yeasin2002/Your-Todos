import React, { useEffect, useState } from 'react';

const GetOTP_btn = ({ IsGetOTP, setIsGetOTP, SigInMail, setSigInMail }) => {
  const [IsLoading, setIsLoading] = useState(false);
  const [IsError, setIsError] = useState(false);
  const [ErrorLog, setErrorLog] = useState('');

  const getOTP_fetch = () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authentication: 'Bearer<jwt-token>',
      },
      body: JSON.stringify({ email: SigInMail }),
    };
    let BaseURL = ` https://young-coders-todo-app.herokuapp.com/v1/`;

    fetch(`${BaseURL}account/request-email-verify`, options)
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          setIsGetOTP(true);
          setIsLoading(false);
          console.log(data);
        } else {
          setErrorLog(data.message);
          setIsError(true);
          setIsLoading(false);
        }
      })
      .catch(err => {
        setIsError(true);
        setIsLoading(false);
      });
  };

  const OTPHandler = e => {
    setIsError(false);
    setErrorLog('');
    if (!SigInMail) return;
    setIsLoading(true);
    e.preventDefault();
    getOTP_fetch();
  };

  let TheValue;
  if (!IsLoading | IsError) {
    TheValue = 'Get OTP ';
  } else {
    TheValue = 'Loading.......';
  }

  return (
    <>
      <input
        onClick={OTPHandler}
        type="button"
        className="bg-primary w-full py-2 my-2 font-bold text-white rounded-lg cursor-pointer"
        value={TheValue}
      />

      <div className="text-rose-800 font-xl px-4 mx-2 my-4 font-bold text-center">
        {IsError && ErrorLog}
      </div>
    </>
  );
};

export default GetOTP_btn;
