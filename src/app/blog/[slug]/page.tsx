import fs from 'fs/promises';
import path from 'path';
import { notFound } from 'next/navigation';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';
import FooterButton from '@/components/FooterButton';

// Used by Next.js to statically generate pages
export async function generateStaticParams() {
  const dir = path.join(process.cwd(), 'content/blog');
  const files = await fs.readdir(dir);

  return files.map((file) => ({
    slug: file.replace(/\.mdx$/, ''),
  }));
}

// Metadata function with correct param typing
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  return {
    title: params.slug,
  };
}

// Page component with correct param typing
export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const filePath = path.join(
    process.cwd(),
    'content/blog',
    `${params.slug}.mdx`
  );

  try {
    const raw = await fs.readFile(filePath, 'utf8');
    const { content, data } = matter(raw);

    const { content: mdxContent } = await compileMDX({
      source: content,
      options: { parseFrontmatter: false },
      components: {
        FooterButton,
      },
    });

    return (
      <article className="prose">
        <h1>{data.title}</h1>
        <p>{data.publishedAt}</p>
        {mdxContent}
      </article>
    );
  } catch (error) {
    console.error('You have an error you need to solve:', error);
    notFound();
  }
}
