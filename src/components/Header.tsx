'use client';

import { motion } from 'framer-motion';
import { sunVariants, moonVariants } from './motionVariants/motionVariants';
import CotaLogo from './svgs/CotaLogo';
import Sun from './utils/Sun';
import Moon from './utils/Moon';

const Header = () => {
  return (
    <header
      className={`z-10 relative
      `}
    >
      <div
        className={`relative z-50 flex flex-col justify-center items-center gap-10 text-center p-16P py-32P bg-background-dark md:justify-around md:flex-row md:p-48P`}
      >
        <div className="group flex justify-around items-center w-full md:w-auto">
          <CotaLogo />
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
          className={`text-lg font-bold tracking-wide uppercase md:text-xl lg:text-2xl
            text-white
            `}
        >
          Cota Blog!
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
      </div>
    </header>
  );
};

export default Header;
