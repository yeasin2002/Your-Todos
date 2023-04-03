import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

//  icon
import back from '../assests/icons/back.svg';

const OutletNav = ({ setIsMobileSeen }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      className="flex justify-end w-full"
    >
      <span
        className=" hover:bg-slate-100 block p-4 transition-all rounded-full"
        onClick={() => {
          navigate('/home/profile');
          setIsMobileSeen(false);
        }}
      >
        <img className=" w-5 h-5" src={back} alt="back" />
      </span>
    </motion.div>
  );
};

export default OutletNav;
