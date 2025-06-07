import './globals.css';
// import ClientWrapper from '@/components/ClientWrapper';

export const metadata = {
  title: `Coța Alexandru's Blog`,
  description: `Real stories of my highs and lows, and a mindset you won't regret incorporating! 😊`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/cotaFavicon.svg" sizes="32x32" />
        <link rel="apple-touch-icon" href="/cotaFavicon.svg" sizes="32x32" />
      </head>
      <body className={`antialiased relative bg-background-dark`}>
        {children}
      </body>
    </html>
  );
}
