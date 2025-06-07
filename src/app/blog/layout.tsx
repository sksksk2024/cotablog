// src/app/blog/layout.tsx
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <header className="p-4 text-center font-bold">
        Coța Alexandru&apos;s Blog
      </header>
      {children}
    </div>
  );
}
