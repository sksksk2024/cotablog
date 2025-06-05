'use client';

import { buttonVariants } from '@/components/motionVariants/motionVariants';
import { motion } from 'framer-motion';
import Link from 'next/link';

const LovingCalisthenics = () => {
  return (
    <article className="w-full max-w-container-800 px-16P py-48P mx-auto flex flex-col gap-10 text-white">
      <header className="text-center space-y-4">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-tight">
          Why Calisthenics
        </h1>
        <p className="text-sm text-gray-300">Published on May 4, 2025</p>
      </header>

      <section className="space-y-6 text-lg leading-relaxed">
        <p>
          I write this blog for mainly hard working people that struggle, and
          know deep down they could do better.
        </p>
        <h2 className="text-xl underline">🏃‍♂️ From Sports to Stillness</h2>
        <p>
          Sports weren&apos;t an interest of mine back then! I was confused, why
          I wasn&apos;t good, or maybe I just wasn&apos;t capable of It. I
          really didn&apos;t think about it much, but I think this was the
          reason why I was feeling empty. Also, I was anxious and scared to talk
          to people. This was another barrier that didn&apos;t fulfill me.
        </p>
        <p>
          I did a lot of sports: swimming - 1 yr, judo - 1 yr, modern dancing -
          3 yrs, football - 1 mt, basketball - 7 yrs. Even though I practiced
          them well, I was in the present moment and I got guided to all these
          fantastic coaches, though I didn&apos;t think for myself one second at
          least. I wasn&apos;t feeling I was doing something, and I wasn&apos;t
          driven to any of these in special.
        </p>
        <p>
          When the pandemic struck, this was my &apos;perfect&apos; excuse to
          quit basketball. And, for 1 yr, I stopped doing anything physical,
          except for the sports subject in school, which I was happy to be a
          part of It. I started playing more video games, and being unhealthier.
        </p>
        <h2 className="text-xl underline">💪 Discovering Calisthenics</h2>
        <p>
          One day, I discovered Calisthenics - on December 31, 2021. It&apos;s
          not lifting weights, which I don&apos;t like to do. Instead, you lift
          yourself up, down, sideways, in the air, and so on. This way of
          physical activity made me curious: It&apos;s like gymnastics, and I
          love being capable to do with my body anything I want. Since I was a
          kid, I said to myself that it is impossible to do cartwheel, or flips.
          I started slowly to get more info about variations of pushups, and how
          to progress fast - sleep well, eat well.
        </p>
        <p>
          After like two months, I got running. I was being consistent and happy
          with the results. Then, one of my school colleagues invited me to a
          workout session - pushups, pullups and rows. It destroyed me. I was
          the weakest around, and that motivated me to push forward. I was
          tired. But I kept going.
        </p>
        <p>
          I did running and calisthenics together. I frequented calisthenics
          more and more, while running less and less. I continued to run for 1
          day a week, and the rest of 6 I did Calisthenics - 1 yr period. Now I
          do 5 calisthenics sessions, one including flips.
        </p>
        <h2 className="text-xl underline">🧘 Training Alone</h2>
        <p>
          For approximately 1 and a half years, I was alone training. From my
          childhood, I was comfortable being alone, and I discovered that is one
          of my superpowers. Almost everyone that starts doing some sport quit,
          because nobody is supporting them, or training with them.
        </p>
        <p>
          Calisthenics is a form of discipline. It&apos;s not just about being
          lean or do very cool skills, it&apos;s also the mind that you are
          training here, preparing it for other aspects of life. Some things
          from video games I&apos;ve applied here, that make my progress faster
          - having a goal and tryhard. Willing to make hard stuff for a long
          period of time pays off. I love calisthenics for what it gives me, and
          I will continue practising it for only myself.
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

export default LovingCalisthenics;
