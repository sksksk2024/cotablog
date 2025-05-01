'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { buttonVariants, ulVariants } from './motionVariants/motionVariants';
import BurgerMenu from './utils/BurgerMenu';
import XMenu from './utils/XMenu';

const Guide = () => {
  const [, setScrolled] = useState(false);
  const [openSideBar, setOpenSideBar] = useState<boolean>(false);

  const navItems = ['Life', 'Calisthenics', 'Web Dev'];

  const getLinkPath = (label: string) =>
    `/${label.toLowerCase().replace(/\s+/g, '')}`;

  const liClasses = `rounded-5BR cursor-pointer font-bold tracking-wide 
    text-white bg-green-dark hover:text-background-dark hover:bg-warning
  `;

  const disabledClasses = `rounded-5BR cursor-not-allowed font-bold tracking-wide text-white bg-gray-500`;
  const contentDisabledClasses =
    'px-16P py-8P w-full h-full flex items-center justify-center';
  const contentClasses =
    'px-16P py-8P w-full h-full flex items-center justify-center cursor-pointer';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleToggleSideBar = () => {
    setOpenSideBar((prev) => !prev);
  };

  return (
    <div>
      <motion.ul
        variants={ulVariants}
        initial="hidden"
        animate="visible"
        className={`z-50 sticky top-0 flex justify-around items-center py-24P bg-background-dark
  `}
      >
        <motion.li onClick={handleToggleSideBar}>
          {openSideBar ? <XMenu /> : <BurgerMenu />}
        </motion.li>

        {openSideBar &&
          navItems.map((label) => (
            <motion.li className={liClasses} key={label}>
              <motion.button disabled className={contentClasses}>
                {label}
              </motion.button>
            </motion.li>
          ))}
      </motion.ul>
    </div>
  );
};

export default Guide;
