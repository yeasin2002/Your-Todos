import React from 'react';
import { motion } from 'framer-motion';
import Camera from '../../components/Icons/Camera';
import InputField from '../../components/InputField';
import { Link } from 'react-router-dom';
const SignInForm = () => {
  return (
    <div className="overflow-x-hidden">
      <motion.div
        initial={{
          x: '-100',
        }}
        animate={{
          x: 0,
        }}
        exit={{
          x: '-100',
        }}
        transition={{
          stiffness: 50,
        }}
        className="logInSec md:p-6 px-6 py-10 bg-gray-100"
      >
        <h2 className="text-primary text-xl font-bold">Sing In</h2>
        <form>
          <input
            type="file"
            name="userProfilePic"
            id="userProfilePic"
            className="hidden"
          />
          <div className="flex items-center justify-center">
            <label htmlFor="userProfilePic">
              <span className="bg-lightBlue hover:bg-blue-100 inline-block p-4 transition-all rounded-full">
                <Camera />
              </span>
            </label>
          </div>

          <div className="gap-x-2 flex">
            <div>
              <InputField
                title={'First  Name'}
                labelFor="userFirstName"
                placeholderValue={'john '}
                inputType="text"
                customStyle="placeholder:px-2  my-1 "
              />
            </div>
            <div>
              <InputField
                title={'Last Name'}
                labelFor="userLastName"
                placeholderValue={'john '}
                inputType="text"
                customStyle="placeholder:px-2  my-1 "
              />
            </div>
          </div>
          <InputField
            title={'Username'}
            labelFor="Username"
            placeholderValue={'john  Deo'}
            inputType="text"
            customStyle="placeholder:px-2  my-1 "
          />
          <InputField
            title={'Password'}
            labelFor="Password"
            placeholderValue={'****'}
            inputType="password"
            customStyle="placeholder:px-2  my-1 "
          />
          <InputField
            title={'Confirm Password'}
            labelFor="ConfirmPassword"
            placeholderValue={'****'}
            inputType="password"
            customStyle="placeholder:px-2  my-1 "
          />

          <input
            type="submit"
            className="bg-primary w-full px-4 py-2 my-2 rounded-lg"
            value="submit"
          />
        </form>
        <div>
          <p className=" text-base text-center">
            Already signed up?
            <Link to="/login">
              <span className="text-primary mx-2 text-base font-bold">
                Login
              </span>
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default SignInForm;
