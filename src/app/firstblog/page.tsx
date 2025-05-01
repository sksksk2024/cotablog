'use client';

import React from 'react';
import Link from 'next/link';

const FirstBlog = () => {
  return (
    <article className="w-full max-w-container-800 px-16P py-48P mx-auto flex flex-col gap-10 text-white">
      <header className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
          First Blog: A Fresh Start
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
          This is just the beginning. I'm using this space to explore ideas,
          share my journey, and document everything I'm learning—from
          calisthenics to JavaScript and beyond.
        </p>
      </section>

      <footer className="pt-10 border-t border-gray-600 text-center">
        <Link
          href="/"
          className="inline-block text-green-400 hover:underline hover:text-green-300 transition-colors"
        >
          ← Back Home
        </Link>
      </footer>
    </article>
  );
};

export default FirstBlog;
