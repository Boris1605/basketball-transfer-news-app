import { Inter } from 'next/font/google';
// import Link from 'next/link';
import { ReactNode } from 'react';
import './globals.css';
import Navbar from './components/Navbar';

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
        <main>{children}</main>
        {/* <footer>Hello Footer</footer> */}
      </body>
    </html>
  );
}
