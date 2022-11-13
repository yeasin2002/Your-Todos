import React, { useEffect, useState } from 'react';

const GetOTP_btn = ({ IsGetOTP, setIsGetOTP, SigInMail, setSigInMail }) => {
  const [IsLoading, setIsLoading] = useState(false);

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
          console.log('done');
          setIsGetOTP(true);
          setIsLoading(false);
        }
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    // getOTP_fetch();
  }, []);

  const OTPHandler = e => {
    if (!SigInMail) return;
    setIsLoading(true);
    e.preventDefault();
    getOTP_fetch();
  };
  return (
    <>
      <input
        onClick={OTPHandler}
        type="button"
        className="bg-primary w-full py-2 my-2 font-bold text-white rounded-lg cursor-pointer"
        value={!IsLoading ? 'Send OTP' : 'Loading....'}
      />
    </>
  );
};

export default GetOTP_btn;
