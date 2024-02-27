import { Inter } from 'next/font/google';
// import Link from 'next/link';
import { ReactNode } from 'react';
import Navbar from './components/Navbar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Home page | Basketball',
    template: '%s | Basketball',
  },
  description: 'Home page of Basketball',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme="bumblebee">
      <body className={inter.className}>
        <header>
          <div>
            <Navbar />
          </div>
        </header>
        <main className="p-5">{children}</main>
        {/* <footer>Hello Footer</footer> */}
      </body>
    </html>
  );
}
