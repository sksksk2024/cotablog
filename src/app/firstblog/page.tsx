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
        <p className="text-sm text-gray-400">Published on May 1, 2025</p>
      </header>

      <section className="space-y-6 text-lg leading-relaxed">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
          maxime voluptatibus suscipit explicabo nobis non est id facilis, in
          delectus ipsum cumque impedit necessitatibus expedita laudantium
          soluta ad quo voluptates?
        </p>
        <p>
          Similique veniam ullam hic animi libero! Culpa obcaecati accusantium
          temporibus, eveniet ex sequi enim tenetur fugiat eius? Nostrum nihil
          culpa, quasi laborum maxime qui suscipit!
        </p>
        <p>
          This is just the beginning. I&apos;m using this space to explore
          ideas, share my journey, and document everything I&apos;m
          learning—from calisthenics to JavaScript and beyond.
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
