'use client';

import { buttonVariants } from '@/components/motionVariants/motionVariants';
import { motion } from 'framer-motion';
import Link from 'next/link';

const FirstBlog = () => {
  return (
    <article className="w-full max-w-container-800 px-16P py-48P mx-auto flex flex-col gap-10 text-white">
      <header className="text-center space-y-4">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-tight">
          First Blog: Welcome
        </h1>
        <p className="text-sm text-gray-300">Published on May 2, 2025</p>
      </header>

      <section className="space-y-6 text-lg leading-relaxed">
        <p>
          I, Cota Alexandru, am writing this blog for you, the ones that are
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

      <footer className="flex flex-col justify-center items-center pt-10 border-t border-gray-600 text-center">
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
