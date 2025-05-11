'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { buttonVariants } from '@/components/motionVariants/motionVariants';
import Search from './svgs/Search';

const BlogCard = ({ title, href }: { title: string; href: string }) => (
  <Link
    className="flex flex-col justify-start items-center min-w-container-300 w-full max-w-container-300 h-300H bg-gray-500 cursor-pointer rounded-xl shadow-lg transition-shadow hover:scale-[0.99] hover:shadow-cyan-400/20"
    href={href}
    aria-label={`Read more about ${title}`}
  >
    <div className="w-full h-3/4">PHOTO</div>
    <div className="flex justify-center items-center w-full h-1/4 p-16P tracking-widest bg-textis text-center text-white">
      <h2 className="text-lg font-bold mx-auto">{title}</h2>
    </div>
  </Link>
);

const BlogSection = () => {
  const [search, setSearch] = useState('');

  const blogPosts = [
    { title: 'Why Calisthenics', href: 'moreblogs/lovingcalisthenics' },
    {
      title: 'My Winning Condition: Web Development',
      href: '/moreblogs/lovingwebdevelopment',
    },
    { title: 'How I Set Up Goals', href: '/moreblogs/settinggoals' },
    { title: '???', href: '/moreblogs/' },
    // Add more as needed
  ];

  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="w-full my-auto flex flex-col justify-center items-center gap-10 px-16P py-48P md:px-64P bg-background-dark">
      <h1 className="text-lg font-bold tracking-wide uppercase md:text-xl lg:text-2xl text-white">
        Blogs Page
      </h1>

      {/* Search Bar */}
      <label
        className={`relative group w-full min-w-container-300 max-w-container-600`}
        htmlFor="searchBar"
        aria-label="Search Blog"
      >
        <input
          className={`outline-none text-textis text-center font-bold px-32P py-8P rounded-5BR bg-snow-gray border-none w-full shadow-soft-cyan focus:shadow-hover-cyan placeholder:text-gray-400 placeholder:opacity-90 focus:outline-none focus:ring-0 focus:border-transparent group-hover:placeholder:text-gray-900
                group-hover:bg-warning
                `}
          id="searchBar"
          type="text"
          placeholder="Search blog..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search Blog"
        />
        <div
          aria-disabled
          className={`absolute top-0 right-0 bg-snow-gray rounded-5BR ring-none border-none w-40W p-8P tracking-0.1 group-hover:bg-warning`}
        >
          <Search />
        </div>
      </label>

      {/* Blog Cards Grid */}
      <section className="grid xs:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-20 place-items-center place-content-center max-w-container-1440">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, idx) => (
            <BlogCard key={idx} title={post.title} href={post.href} />
          ))
        ) : (
          <p className="text-white col-span-full">No results found.</p>
        )}
      </section>

      <motion.button
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        animate="exit"
        className="w-full min-w-container-300 max-w-container-600 cursor-pointer p-16P rounded-5BR font-bold tracking-wide text-white bg-green-dark hover:text-background-dark hover:bg-warning"
      >
        <Link href="/">Go Home</Link>
      </motion.button>
    </main>
  );
};

export default BlogSection;
