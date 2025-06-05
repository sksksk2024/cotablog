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

// Note: we accept a single `props` parameter here, and type it.
//       This both satisfies Next.js’s inferred type and avoids `any`.
export async function generateMetadata(props: { params: { slug: string } }) {
  const slug = props.params.slug;
  return { title: slug };
}

// Same trick for the page component: accept `props` instead of destructuring.
export default async function BlogPage(props: { params: { slug: string } }) {
  const slug = props.params.slug;
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
