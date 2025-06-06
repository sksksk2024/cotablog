'use client';

import { motion } from 'framer-motion';
import {
  buttonVariants,
  sunVariants,
} from '@/components/motionVariants/motionVariants';
import Image from 'next/image';
import notFoundMe from '@/images/notFoundMe.webp';
import Sun from '@/components/svgs/Sun';
import Link from 'next/link';
import CotaLogo from '@/components/svgs/CotaLogo';

const NotFound = () => {
  return (
    <main
      className={`overflow-y-clip min-h-[100dvh] flex flex-col justify-start items-center text-white bg-deep-dark
        `}
    >
      <section
        className={`z-50 flex flex-col justify-center items-center gap-10 text-center p-16P py-32P pb-144P bg-cyanDark md:justify-around md:flex-row md:p-48P`}
      >
        <div className="group flex justify-around items-center w-full md:w-auto">
          <div className="w-64W  min-w-container-48">
            <CotaLogo />
          </div>
          <motion.div
            variants={sunVariants}
            initial="initial"
            whileHover="hover"
            drag
            dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
            dragElastic={0.7}
          >
            <Sun className="min-w-container-48 w-64W h-64H cursor-pointer fill-white text-white hover:text-warning hover:fill-warning transition-colors duration-300 md:hidden" />
          </motion.div>
        </div>
        <h1
          className={`text-lg font-bold tracking-wide uppercase md:text-xl lg:text-2xl text-white
            `}
        >
          Not all who wander are lost.
        </h1>

        <motion.div
          variants={sunVariants}
          initial="initial"
          whileHover="hover"
          drag
          dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
          dragElastic={0.7}
        >
          <Sun className="hidden min-w-container-48 w-64W h-64H cursor-pointer fill-white text-white hover:text-warning hover:fill-warning transition-colors duration-300 md:block" />
        </motion.div>
      </section>
      <section
        className={`relative flex flex-col justify-start items-center gap-10 px-32P pb-112P text-2xl text-center font-bold h-3/4
          
          `}
      >
        <h1>
          Looks like you&apos;ve hit a dead end! This page doesn&apos;t exist.
        </h1>

        {/* HOME LINK */}
        <motion.button
          className={`z-50 w-full min-w-container-300 max-w-container-600 text-center text-md cursor-pointer p-16P rounded-5BR font-bold tracking-wide
          text-white bg-green-dark hover:text-background-dark hover:bg-warning
        `}
          variants={buttonVariants}
          initial="hidden"
          whileHover="hover"
          animate="exit"
          drag
          dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
          dragElastic={0.7}
        >
          <Link href="/" passHref>
            Go Home
          </Link>
        </motion.button>
      </section>
      <div className="w-400W md:w-full max-w-container-1000 absolute bottom-0 opacity-30">
        <Image src={notFoundMe} className="w-full" alt="aboutMe" />
      </div>
    </main>
  );
};

export default NotFound;
