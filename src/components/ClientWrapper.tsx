'use client';

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Put client-only logic here, e.g. Toaster */}
      {children}
    </>
  );
}
