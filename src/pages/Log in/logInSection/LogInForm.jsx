import React from "react";

const LogInForm = () => {
  let logInInput = `w-full bg-[#D9E1F2] py-2 rounded-md my-2 placeholder:text-[#3960AC]
  placeholder:px-4 
`;
  return (
    <div className="logInSec p-14 bg-gray-100">
      <div>
        <h2>Log In </h2>
      </div>
      <div>
        <form className="mt-10">
          <label htmlFor="userName">
            <p>Email or Username</p>
          </label>
          <input
            type="text"
            className={logInInput}
            placeholder="mdkawsarislam2002@example.com"
          />

          <br />

          <label htmlFor="userName" className="mt-4">
            <p>Password </p>
          </label>
          <input type="password" className={logInInput} placeholder="***" />
          <p className="text-primary text-sm">Forgot Password </p>

          <button type="submit" className="bg-primary w-full py-2 mt-4">
            Log In
          </button>
          <p className="text-sm text-center">Already logged in? Sign Up</p>
        </form>
      </div>
    </div>
  );
};
export default LogInForm;
