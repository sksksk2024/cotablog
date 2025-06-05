// components/FooterButton.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { buttonVariants } from '@/components/motionVariants/motionVariants';

export default function FooterButton() {
  return (
    <motion.button
      variants={buttonVariants}
      initial="initial"
      whileHover="hover"
      animate="exit"
      className="w-full min-w-container-300 max-w-container-600 cursor-pointer p-16P rounded-5BR font-bold tracking-wide text-white bg-green-dark hover:text-background-dark hover:bg-warning"
    >
      <Link href="/blog">Go Home</Link>
    </motion.button>
  );
}
