import React from "react";
import LogInDisplay from "./logInSection/LogInDisplay";
import LogInForm from "./logInSection/LogInForm";

const Login = () => {
  return (
    <div className="bg-primary w-screen h-screen px-20 py-20">
      <div className=" grid w-full h-full grid-cols-2">
        <LogInDisplay />
        <LogInForm />
      </div>
    </div>
  );
};
export default Login;
