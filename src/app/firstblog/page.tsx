'use client';

import { buttonVariants } from '@/components/motionVariants/motionVariants';
import { motion } from 'framer-motion';
import Link from 'next/link';

const FirstBlog = () => {
  return (
    <article className="w-[100dvw] px-4 md:px-8 py-12 mx-auto flex flex-col gap-1 text-white">
      <header className="text-start min-w-container-300 w-[100%] max-w-container-600 mx-auto mb-96M">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-tight">
          First Blog: Welcome
        </h1>
        <p className="mt-16M text-sm text-gray-300">Published on May 2, 2025</p>
      </header>

      <section className="text-lg min-w-container-300 w-[100%] max-w-container-600 leading-relaxed mx-auto">
        <p>
          I, Coța Alexandru, am writing this blog for you, the ones that are
          curious how I can uplift my speaking and writing skills through the
          roof.
        </p>
        <p>
          The reason why I started to write blogs is to share my thoughts, my
          interests and my progress overall in these three pillars:
          Calisthenics, Web Development, and Managing Life Well.
        </p>
        <p>
          In this blog, you will get tips on how to make your life better, make
          good decisions, and learn from my mistakes. I will cover the general
          topics, and also cover in more depth, as I get better at expressing
          myself and continue improving my writing skills.
        </p>
      </section>

      <footer className="mt-96M min-w-container-300 w-[100%] max-w-container-600 mx-auto">
        <motion.button
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          animate="exit"
          className="w-full min-w-container-300 max-w-container-600 cursor-pointer p-16P rounded-5BR font-bold tracking-wide text-white bg-green-dark hover:text-background-dark hover:bg-warning"
        >
          <Link href="/">Go Home</Link>
        </motion.button>
      </footer>
    </article>
  );
};

export default FirstBlog;
