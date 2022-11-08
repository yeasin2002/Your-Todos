import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import SideBarItems from '../../../components/SideBarItems';

// assent
import cross from '../../../assests/icons/cross.svg';
import HomeIcon from '../../../assests/icons/home.svg';
import HelpAndSupport from '../../../assests/icons/help-&-support.svg';
import AboutUs from '../../../assests/icons/about-us.svg';
import SB_btn from '../../../components/SB_btn';

const SideBar = ({ MenuHandler, MobileMenu }) => {
  return (
    <>
      <AnimatePresence>
        {MobileMenu && (
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 50, opacity: 0 }}
            transition={{
              stiffness: 50,
            }}
            className="w-[70vw] absolute top-0 right-0 h-screen bg-gray-200 z-20"
          >
            <div className="flex justify-end m-4 cursor-pointer">
              <img
                onClick={MenuHandler}
                src={cross}
                alt={'cross'}
                className="w-5 h-5 mx-4 mt-6 select-none"
              />
            </div>
            <div>
              <div className="flex flex-col my-8">
                <SideBarItems
                  title={'home'}
                  sideIcon={HomeIcon}
                  linkTo={'/'}
                  csStyle="bg-[#C6D3EC]"
                />
                <SideBarItems
                  title={'About us '}
                  sideIcon={AboutUs}
                  linkTo={'about'}
                  csStyle="bg-[#C6D3EC]"
                />
                <SideBarItems
                  title={'Help And Support '}
                  sideIcon={HelpAndSupport}
                  linkTo={'helpAndSupport'}
                />
              </div>
              {/* buttons */}
              <div className="flex flex-col justify-end m-4 cursor-pointer">
                <SB_btn
                  title={'Start For Free'}
                  backgroundColor="bg-primary hover:bg-blue-600"
                  whereTo={'/home'}
                />
                <SB_btn
                  title={'Log In'}
                  backgroundColor="bg-lightBlue hover:bg-gray-400"
                  whereTo={'/login'}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SideBar;
