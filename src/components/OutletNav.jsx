import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

//  icon
import back from '../assests/icons/back.svg';
import { useEffect } from 'react';
import { useState } from 'react';

const OutletNav = ({ setIsMobileSeen }) => {
  const [TabName, setTabName] = useState('');
  const navigate = useNavigate();

  // popstate
  window.addEventListener('popstate', () => {
    setIsMobileSeen(false);
  });

  const location = useLocation();
  const res = location.pathname.split('/');

  useEffect(() => {
    const path = res[res.length - 1];
    if (path === 'preferences') {
      setTabName('Preferences');
    } else {
      setTabName('Account setting');
    }
  }, []);

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      className="bg-slate-300 flex items-center justify-between w-full px-2"
    >
      <h4> {TabName} </h4>
      <span
        className=" hover:bg-slate-100 block p-4 transition-all rounded-full"
        onClick={() => {
          navigate('/home/profile');
          setIsMobileSeen(false);
        }}
      >
        <img className=" w-5 h-5 text-black" src={back} alt="back" />
      </span>
    </motion.div>
  );
};

export default OutletNav;
