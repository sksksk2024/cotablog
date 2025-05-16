'use client';

import Link from 'next/link';
import Phone from './svgs/Phone';
import Email from './svgs/Email';
import WingsLogo from './svgs/WingsLogo';
import CotaLogoFooter from './svgs/CotaLogoFooter';

const Footer = () => {
  return (
    <footer
      id="explore"
      className={`z-10 flex flex-col justify-center items-center py-64P sm:px-64P pb-0 gap-20 text-white bg-black h-full
    `}
    >
      <div className="flex flex-col justify-center items-center gap-5 text-center">
        <h2
          className={`text-xl xs:text-2xl text-start font-bold
            `}
        >
          Contact Me
        </h2>
        <div
          className={`flex flex-col justify-center items-center gap-5 md:flex-row md:gap-12
        `}
        >
          <button
            className={`select-text text-lg xs:text-xl font-bold flex justify-start items-center gap-2 cursor-pointer text-white hover:text-warning
          `}
          >
            <Phone />
            {/* Business Number */}
          </button>
          <button
            className={`select-text text-lg xs:text-xl font-bold flex justify-start items-center gap-2 cursor-pointer
                text-white hover:text-warning
            `}
          >
            <Email />
            cota8091@gmail.com {/* Business Email */}
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center text-center">
        <h2
          className={`text-xl xs:text-2xl text-start font-bold
            `}
        >
          Other Platforms
        </h2>
        <div className="flex justify-around items-center gap-10">
          {/* LINKS A BIT ROTATED WHEN HOVERED */}
          <Link
            target="_blank"
            href="https://next-wings.onrender.com/"
            passHref
          >
            <WingsLogo />
          </Link>
          <Link
            target="_blank"
            href="https://cotaalexandru.onrender.com/"
            passHref
          >
            <CotaLogoFooter />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
