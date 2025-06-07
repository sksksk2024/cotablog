'use client';

import Link from 'next/link';
import React from 'react';
import successfulMe from '@/images/relaxedMe.webp';
import Image from 'next/image';

const FirstBlogCard = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-10 max-w-container-1440">
      <Link
        className="flex flex-col justify-start items-center min-w-container-300 w-full max-w-container-300 h-300H bg-gray-500 cursor-pointer rounded-xl shadow-lg transition-shadow hover:scale-[0.99] hover:shadow-cyan-400/20 bg-white"
        href={'/firstblog'}
      >
        <div className="relative w-1/2 h-3/4">
          <Image
            src={successfulMe}
            className="absolute w-full h-full"
            alt="Coța Alexandru's first blog"
          />
        </div>
        <div className="flex justify-center items-center w-full h-1/4 p-16P tracking-widest bg-textis text-white">
          <h2 className="text-lg font-bold mx-auto">My First Blog</h2>
        </div>
      </Link>
      <p className="text-center">
        Want to Subscribe? <br />{' '}
        <Link
          target="_blank"
          href={'https://cotaalexandru.onrender.com/newsletter'}
          className="cursor-pointer hover:text-warning"
        >
          Go Here
        </Link>
      </p>
    </section>
  );
};

export default FirstBlogCard;
