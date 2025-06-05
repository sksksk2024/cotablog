'use client';

import { buttonVariants } from '@/components/motionVariants/motionVariants';
import { motion } from 'framer-motion';
import Link from 'next/link';

const LovingWebDevelopment = () => {
  return (
    <article className="w-full max-w-container-800 px-16P py-48P mx-auto flex flex-col gap-10 text-white">
      <header className="text-center space-y-4">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-tight">
          My Winning Condition: Web Development
        </h1>
        <p className="text-sm text-gray-300">Published on May 8, 2025</p>
      </header>

      <section className="space-y-6 text-lg leading-relaxed">
        <p>
          This blog is for people who can do multiple things good enough - or
          even excel at them.
        </p>
        <h2 className="text-xl underline">🚀 Discovering Web Development</h2>
        <p>
          My Web Development started to shine when I wanted to get to the
          market, in someway. I didn&apos;t want to do any more physical
          activities in addition to my difficult workouts and going to school. I
          wanted to make money from home. One time, I saw trading as an option,
          but then gave up, because I don&apos;t like to spend time learning
          something just for money, but also for my near future business. Then
          Web Development came as my second option.
        </p>
        <p>
          I realised how much you have to pay a web developer, even more than
          any other role in a business, in my oppinion. I didn&apos;t want to
          pay someone that much for my business, obviously not in my start of my
          journey. So, I started to practise making sites, and with the same
          cycle that I did with calisthenics, I got as much information as
          possible while applying it along the way.
        </p>
        <p>
          My goal was to be able to create anything I want, and to already have
          my personal website. From not knowing anything and being intimidated
          by how hard HTML language was, to be able to learn and become a
          fullstack web developer in Nextjs, Prisma, Reactjs, Tailwind CSS,
          TypeScript, Framer Motion, and having experience with lots of other
          technologies, that I taught they won&apos;t treat my dreams as I want,
          but at the same time, they pushed me faster to my wanted stack. To
          give you some tech examples, they are: MongoDB, Nodejs, Vitest,
          Docker, Vue, CSS, SCSS/SASS, Ruby on Rails, GSAP, ... a lot more.
        </p>
        <h2 className="text-xl underline">
          📚 My learning journey - in more depth
        </h2>
        <p>
          My brother, who is a web developer himself, gave me this opportunity
          to learn this industry and, also, he said to start learning Ruby on
          Rails, which focuses on the functionality of a website, also known as
          the backend. Looking back, this was a misstep: I couldn&apos;t learn
          much, I was stuck in so many problems: how to deploy this on github,
          how to make the website cooler looking, how to add multiple
          functionalities, without breaking my head, and the cherry at the top,
          how to not hope that some random JavaScript file worked without
          knowing why. I didn&apos;t understand anything: it was a combination
          with also html, bootstrap css classes, and JavaScript, which was a
          real mess. After a few months, I got separated from that violating
          environment, thinking learning the actual basics would help me. My
          learning path was, and I also suggest for those who want to learn how
          to put fascinating pages on the browser: html, css, JavaScript, css
          frameworks, JavaScript frameworks, typescript, then the backend. My
          path was, for that time, a brilliant set of moves that I took, which
          personally, skyrocketed my expectations on making cooler and better
          websites, overall. At the same time, the process got fast and
          efficient, while facing fewer struggles. After this adventure, I
          didn&apos;t come back to the tech that my brother uses, since I like
          my tech stack much more.
        </p>
        <h2 className="text-xl underline">
          🏆 My Greatest Achievements in Web Development - by now
        </h2>
        <p>
          The whole process, to build personal websites, to become confident
          making them and using the tools properly, took me one year and a half,
          with consistent work, try and error situations and revelations.
        </p>
        <p>
          Some of my biggest achievements of this process are: knowing how to
          deploy on Render, writing in React and using the hooks it offers,
          implementing backend and make it communicate with the frontend. All
          these, after I mastered them, this development process became so much
          easier. I guarantee you: if you put me on the desk working for one
          month, I will accomplish more than I learned in one year, and this
          amount of time will only increase if I continue to work as hard as
          possible. In my case, my goal wasn&apos;t to become one of the best in
          the industry, but rather just feeling comfortable with the skill, so I
          can move on to other things to master in these teenage years and that
          are vital, such as communication, writing, and sales.
        </p>
        <h2 className="text-xl underline">💡 Was It worth It?</h2>
        <p>
          Definetly. I loved to discover my creativity and to develop the skill
          of solving problems through web development. This journey taught me to
          be conscious not to select multiple steps at a time, and that the
          limits don&apos;t exist, while you can still be awake, energetic and
          with the purpose to finish the work in that specific day. Also, now I
          have lots of opportunities unlocked. Besides being able to create my
          personal websites, now I am focused to take a job in the industry. I
          will try my best to get it, as I know it will boost me in things such:
          collaboration, teamwork, making new friends that are also driven by
          the same objectives, like me.
        </p>
        <h2 className="text-xl underline">
          🔮 Will I continue to do web development?
        </h2>
        <p>
          Absolutely. As a web developer, I need to take care of my business
          websites, be conscious of making them secured, and always try to
          develop them more and more, from different angles. So, in my
          perspective, I will be limiting this learning process for now, but
          still continue to work a bit a day, for the things that needs
          improvements, not neglecting the hours when I will be working on the
          job.
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

export default LovingWebDevelopment;
