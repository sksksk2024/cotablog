'use client';

import { buttonVariants } from '@/components/motionVariants/motionVariants';
import { motion } from 'framer-motion';
import Link from 'next/link';

const SettingGoals = () => {
  return (
    <article className="w-full max-w-container-800 px-16P py-48P mx-auto flex flex-col gap-10 text-white">
      <header className="text-center space-y-4">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-tight">
          How I Set Up Goals
        </h1>
        <p className="text-sm text-gray-300">Published on May 11, 2025</p>
      </header>

      <section className="space-y-6 text-lg leading-relaxed">
        <p>
          This blog is for people who feel unsure about their future direction.
        </p>
        <h2 className="text-xl underline">🧠 My Thinking</h2>
        <p>
          These days, we have a lot of options: be a teacher, policeman,
          athlete, seller, etc. We live once, and life is not that long. Here is
          something interesting: one day, I simply thought, &quot;I want to play
          Roblox&quot;. I didn&apos;t think about there are other things I could
          do. I just did it, and committed to that thing. I remember like it was
          last week. I was a 10-year-old who started playing Roblox all day. I
          enjoyed those times so much that I still remember all my
          accomplishments on the platform.
          <ul className="list-disc list-inside space-y-2">
            <li>I did kill tricks on Murder Mystery 2</li>
            <li>I played Dodgeball solo versus 6 people – and won</li>
            <li>
              I completed The Tower Of Hell (180 levels at the time, now 330)
            </li>
            <li>I earned the Golden Antlers of Honor in a global event</li>
          </ul>
        </p>
        <h2 className="text-xl underline">🎮 What I Learned from Roblox</h2>
        <p>
          My Roblox experience doesn&apos;t align with who I am right now, and I
          am still proud of what I did. I learned that: energy is essential to
          making dreams come true, how to control my emotions when I lose, to
          play with more people, because it&apos;s more fun, to not get
          discouraged when things do not go as planned, and to focus on one
          thing when you really want to become great at it! A lot of golden
          advice that, as future self, I am grateful I learned them then.
        </p>
        <h2 className="text-xl underline">
          💥 How I Attacked 2 Bad Habits at Once
        </h2>
        <p>
          I still wonder why I changed my future direction so easily! In the
          past, I thought it was because there weren&apos;t any Roblox
          competitions in my country, and even now, after 4 years. Right now, I
          believe it was because I started to think health is better than
          anything. So, I dropped my gaming habit and started Calisthenics. I
          wanted to feel strong, and incredible when I wake up. Also, when I was
          feeling horible for a few days - because I had been eating chips and
          rods every day for a while - I completely deleted them from my diet. I
          was serious about myself, and the results didn&apos;t take long to
          show up.
        </p>
        <h2 className="text-xl underline">💡 My Advice</h2>
        <p>
          You won&apos;t stop a habit, only when you know it makes you feel bad
          or unhealthy. Take one of my family members as an example: he says
          smoking calms him down. You can&apos;t tell him all the disadvantages
          of smoking - he won&apos;t believe them deeply, until something
          serious happens to him. Sadly, that&apos;s how it works for many. So,
          just get information, and stay open-minded. Tell yourself honestly:
          &quot;This habit is not good because ...&quot; or &quot;This is a good
          habit, and it makes me feel ...&quot;. Once you start thinking like
          that, in my case, it becomes simple to step away from bad routines.
          Also, keeping a positive attitude makes everything easier.
        </p>
        <h2 className="text-xl underline">🏁 Conclusion</h2>
        <p>
          We all have things we can improve, and that is okay. Be happy and
          thankful you recognise them, and take action. When you have something
          specific to do, just do it. If it turns out wrong, learn from it and
          try something else. If it works, great - keep going.
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

export default SettingGoals;
