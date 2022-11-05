import React from "react";
import { Link } from "react-router-dom";

const LeftPart = () => {
  return (
    <div className=" md:text-left m-auto mx-6 text-center">
      <div className="md:text-left text-center">
        <h1 className=" text-secondary md:mx-0 mx-8 mt-8 text-4xl font-bold capitalize">
          Smash all of your ideas into one place
        </h1>

        <p className="md:text-lg sm:text-xl my-4">
          <span className="text-lg font-bold tracking-wide text-gray-600">
            Collaborate
          </span>
          with your friends to help you make your journey of bringing them to
          live a bit more
          <span className="text-lg font-bold text-gray-600"> fun </span>.
        </p>
      </div>
      <div>
        <div className=" gap-x-2 md:justify-start flex justify-center my-2">
          <Link
            to="sign_in"
            className="bg-primary hover:bg-blue-700 px-4 py-2 text-white transition-all rounded-md"
          >
            Sign In
          </Link>
          <Link to="home" className="px-4 py-2 bg-gray-100 rounded-md">
            Continue Anyway
          </Link>
        </div>

        <p>69 people are already enjoying our app</p>
      </div>
    </div>
  );
};

export default LeftPart;
