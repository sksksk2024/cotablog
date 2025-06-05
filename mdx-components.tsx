// mdx-components.tsx
'use client';

import type { MDXComponents } from 'mdx/types';
import FooterButton from '@/components/FooterButton';

export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <h1
      className="text-2xl md:text-3xl font-extrabold tracking-tight leading-tight"
      {...props}
    />
  ),
  h2: (props) => <h2 className="text-xl underline" {...props} />,
  p: (props) => <p className="text-lg leading-relaxed text-white" {...props} />,
  article: (props) => (
    <article
      className="w-full max-w-container-800 px-16P py-48P mx-auto flex flex-col gap-10 text-white"
      {...props}
    />
  ),
  section: (props) => <section {...props} />,
  header: (props) => <header className="text-center space-y-4" {...props} />,
  footer: (props) => <footer {...props} />,
  video: (props) => (
    <video controls className="w-full rounded-xl shadow-lg" {...props} />
  ),
  FooterButton,
};
