import React from 'react';
import { motion } from 'framer-motion';
import LeaveIcon from '../assests/icons/Leave.svg';

const Leave = ({ setIsSidebarShow }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      className="bottom-4 left-2 absolute cursor-pointer"
    >
      <img
        src={LeaveIcon}
        alt="leave sidebar "
        onClick={() => {
          setIsSidebarShow(true);
        }}
      />
    </motion.div>
  );
};

export default Leave;
