// src/app/blog/[slug]/page.tsx

// @ts-nocheck
// (We rely on Next.js’s built-in inference for both `params` and return types.)

import fs from 'fs/promises';
import path from 'path';
import { notFound } from 'next/navigation';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';
import FooterButton from '@/components/FooterButton';

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), 'content/blog');
  const files = await fs.readdir(dir);

  return files.map((file) => ({
    slug: file.replace(/\.mdx$/, ''),
  }));
}

export async function generateMetadata({ params }) {
  return {
    title: params.slug,
  };
}

export default async function BlogPage({ params }) {
  const slug = params.slug;
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
