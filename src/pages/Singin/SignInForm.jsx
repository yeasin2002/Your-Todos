import React from 'react';
import { motion } from 'framer-motion';
const SignInForm = () => {
  return (
    <div>
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
        className="logInSec md:p-14 px-6 py-10 bg-gray-100"
      >
        <h2>Sing In</h2>
      </motion.div>
    </div>
  );
};

export default SignInForm;
