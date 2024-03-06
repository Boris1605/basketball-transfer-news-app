import { Inter } from 'next/font/google';
// import Link from 'next/link';
import { cookies } from 'next/headers';
import { ReactNode } from 'react';
import { getUser } from '../database/users';
import Navbar from './components/Navbar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  icons: {
    icon: '/icon.png',
  },
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
            <Navbar user={user} />
          </div>
        </header>
        <main className="p-5">{children}</main>
        <footer className="footer footer-center p-4 bg-base-300 text-base-content bottom-0 fixed">
          <aside>
            <p>
              Copyright © 2024 - All right reserved by Basketball Transfers &
              News
            </p>
          </aside>
        </footer>
      </body>
    </html>
  );
}
