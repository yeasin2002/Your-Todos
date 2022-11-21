import React from 'react';
import { Link } from 'react-router-dom';

const LogInFailed = () => {
  return (
    <div className="top-5 left-5  m-7 absolute w-[80vw] p-20 text-gray-200 bg-gray-600">
      <p>Log In failed </p>

      <Link
        to="/"
        className="border-primary bg-slate-800 inline-block px-4 py-2 my-6 border"
      >
        Return Home
      </Link>
    </div>
  );
};
export default LogInFailed;
