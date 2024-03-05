import { Inter } from 'next/font/google';
// import Link from 'next/link';
import { ReactNode } from 'react';
import Navbar from './components/Navbar';
import './globals.css';
import { cookies } from 'next/headers';
import { getUser } from '../database/users';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Home page | Basketball',
    template: '%s | Basketball',
  },
  description: 'Home page of Basketball',
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const sessionTokenCookie = cookies().get('sessionToken');

  // 2. Query the current user with the sessionToken
  const user = sessionTokenCookie && (await getUser(sessionTokenCookie.value));

  return (
    <html lang="en" data-theme="bumblebee">
      <body className={inter.className}>
        <header>
          <div>
            {/* ternary op logged / not logged user navbar */}
            <Navbar user={user} />
          </div>
        </header>
        <main className="p-5">{children}</main>
        {/* <footer>Hello Footer</footer> */}
      </body>
    </html>
  );
}
