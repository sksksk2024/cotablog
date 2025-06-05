'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { buttonVariants, ulVariants } from './motionVariants/motionVariants';
import XMenu from './svgs/XMenu';
import BurgerMenu from './svgs/BurgerMenu';

const Guide = () => {
  const [, setScrolled] = useState(false);
  const [openSideBar, setOpenSideBar] = useState<boolean>(false);

  const liClasses = `rounded-5BR cursor-pointer font-bold tracking-wide 
    text-white bg-green-dark hover:text-background-dark hover:bg-warning
  `;

  // const disabledClasses = `rounded-5BR cursor-not-allowed font-bold tracking-wide text-white bg-gray-500`;
  // const contentDisabledClasses =
  //   'px-16P py-8P w-full h-full flex items-center justify-center';
  const contentClasses =
    'px-16P py-8P w-full h-full flex items-center justify-center cursor-pointer';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleSideBar = () => {
    setOpenSideBar((prev) => !prev);
  };

  return (
    <div>
      <motion.ul
        variants={ulVariants}
        initial="hidden"
        animate="visible"
        className={`z-50 sticky top-0 flex justify-around items-center py-24P bg-black
  `}
      >
        <motion.li onClick={handleToggleSideBar}>
          {openSideBar ? <XMenu /> : <BurgerMenu />}
        </motion.li>

        {openSideBar && (
          <motion.li
            className={liClasses}
            key="moreblogs"
            variants={buttonVariants}
            initial="hidden"
            whileHover="hover"
          >
            <Link href={'/blog'} className={contentClasses}>
              More Blogs
            </Link>
          </motion.li>
        )}
      </motion.ul>
    </div>
  );
};

export default Guide;
