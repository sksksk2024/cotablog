'use client';

import { buttonVariants } from '@/components/motionVariants/motionVariants';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Distractions = () => {
  return (
    <article className="w-full max-w-container-800 px-16P py-48P mx-auto flex flex-col gap-10 text-white">
      <header className="text-center space-y-4">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-tight">
          Distractions
        </h1>
        <p className="text-sm text-gray-300">Published on May 16, 2025</p>
      </header>

      <section className="space-y-6 text-lg leading-relaxed">
        <p>
          I write this page for any teenager that wants to set apart from any
          distractions from everywhere.
        </p>
        <h2 className="text-xl underline">
          My vision about it and my experience
        </h2>
        <p>
          As I was growing up, I was surrounded by all kinds of addictions, to
          specify my main ones: music and social media. Music is still the
          hardest one for me to give up, even today. The idea of making yourself
          think music gives energy or makes you happy is a vicious trap. I love
          music, but when I listen to It all day, It has become an addiction, It
          gives me bad times. It&apos;s not ideal to put music before bed, or
          put it loud to hear all your neighbours. Music has started to control
          me, in every aspect of life. About Social Media, when I have started
          It, a feeling of missing out had developed inside me. I was feeling
          worse than before, when I started to think that everybody was doing
          incredible stuff, and me not. Once I realized I was doing the wrong
          thing, comparing myself and feeling unmotivated. I refused, in the
          bottom of my heart, to believe in this way, which made me feel more
          confident, and stronger. Those emotions combined have easily won the
          battle between staying all day in socials and stop seeing content and
          take action.
        </p>
        <h2 className="text-xl underline">The importance of self awarness</h2>
        <p>
          Being self aware of surroundings has changed my life. Being capable of
          thinking about everything, going a step back, and analyse posible
          mistakes have tremendously improved my qualities while I am facing a
          challange. When you can be able to see in your head why you get
          interrupted and why you didn&apos;t get the result you want, with more
          attempts, you start to observe patterns. These patterns make you
          unstoppable, like you have unlimited chances: when you get interrupted
          once again, you start increasing your voice, or beat him up, or tell
          him I have some valuable information to share before you leave, you
          won, you got his attention back.
        </p>
        <h2 className="text-xl underline">The stolen weights discussion</h2>
        <p>
          I was feeling great, until something clicked. I had to talk with my
          colleague about a strange conversation I had with a friend, just in
          front of her. I started to talk, but in slow paced, and in some
          degree, nervous. So, my companion changed the conversation, because
          she found me boring and unconfident. I felt bad.... But after a few
          weeks, the subject came back to life, when she saw me at the police.
          In that time I was free of any mental barriers, and this time, I spoke
          to her in a faster pace, and more engaging, the general ideas has been
          shared as a one phraser, not too long or short. Just perfect. Those
          little things changed the way of the discussion in a new direction. I
          had the attention to talk more, but exactly when I tried to
          communicate deeper, I must get back in the police building to get my
          goods back.
        </p>
        <h2 className="text-xl underline">Conclusion</h2>
        <p>
          This post won’t help unless you’re truly ready to change. But if you
          are, it might spark something. Right now I am writing without music -
          feeling proud of myself, and I already feel calm and not engaged all
          the time. I am slower in completing tasks, but I know from experience
          that It will change soon. See you guys on my next blog!
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Watch the Video</h2>
        <video controls className="w-full rounded-xl shadow-lg">
          <source src="/videos/distractions.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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

export default Distractions;
