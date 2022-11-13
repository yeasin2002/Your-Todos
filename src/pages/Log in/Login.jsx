import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import ChangePass from './logInSection/ChangePass';
import LogInDisplay from '../../components/LogInDisplay';
import LogInForm from './logInSection/LogInForm';

const Login = () => {
  const [ToForgotPass, setToForgotPass] = useState(false);
  return (
    <div className="bg-primary md:p-20 w-screen h-screen p-10">
      <div className=" md:grid-cols-2 grid w-full h-full grid-cols-1">
        <LogInDisplay />

        <div className="h-full overflow-x-hidden">
          <AnimatePresence>
            {!ToForgotPass ? (
              <LogInForm
                ToForgotPass={ToForgotPass}
                setToForgotPass={setToForgotPass}
              />
            ) : (
              <ChangePass
                ToForgotPass={ToForgotPass}
                setToForgotPass={setToForgotPass}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
export default Login;
