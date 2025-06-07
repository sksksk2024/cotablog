// src/app/blog/[slug]/page.tsx

import fs from 'fs/promises';
import path from 'path';
import { notFound } from 'next/navigation';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';
import FooterButton from '@/components/FooterButton';

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const dir = path.join(process.cwd(), 'content/blog');
  const files = await fs.readdir(dir);

  return files.map((file) => ({
    slug: file.replace(/\.mdx$/, ''),
  }));
}

// @ts-expect-error - no type defined for params from Next.js
export async function generateMetadata({ params }) {
  // In Next 15, `params` is a Promise, so we await it:
  const { slug } = await params;
  return { title: slug };
}

// @ts-expect-error - no type defined for params from Next.js
export default async function BlogPage({ params }) {
  // Again, `params` is a Promise<{ slug: string }>:
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'content/blog', `${slug}.mdx`);

  try {
    const raw = await fs.readFile(filePath, 'utf8');
    const { content, data } = matter(raw);

    const { content: mdxContent } = await compileMDX({
      source: content,
      options: { parseFrontmatter: false },
      components: { FooterButton },
    });

    return (
      <article className="prose">
        <h1>{data.title}</h1>
        <p>{data.publishedAt}</p>
        {mdxContent}
      </article>
    );
  } catch (error) {
    console.error('Error in page generation:', error);
    notFound();
  }
}
