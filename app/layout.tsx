import { Footer } from '@/components/organisms/footer';
import { Navigation } from '@/components/organisms/navigation';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import { Playfair_Display } from 'next/font/google';
import type React from 'react';
import { Suspense } from 'react';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Michael Han's Portfolio",
  description: 'Software Engineer, Jazz Musician, and Creative Professional',
  generator: 'v0.app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${playfair.variable} antialiased`}
      >
        <Navigation />
        <Suspense fallback={null}>{children}</Suspense>
        <Footer />
      </body>
    </html>
  );
}
