// frontend/src/app/layout.jsx

import './globals.css';
import { Inter, Roboto } from 'next/font/google';

// Configure the fonts to be used with Next.js's font optimization
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

export const metadata = {
  title: 'Collex — Your Campus Wallet',
  description: 'A digital campus wallet for students and faculty.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto.variable}`}>
      <head>
        {/* You can add custom meta tags or links here if needed */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-sans bg-gray-50 text-gray-800">
        {/* The `children` prop represents the page content */}
        {children}
      </body>
    </html>
  );
}