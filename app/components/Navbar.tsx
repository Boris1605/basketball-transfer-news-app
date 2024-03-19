'use client';

import classnames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LogoutButton from '../(auth)/logout/LogoutButton';
import { User } from '../../database/users';

type Props = {
  user: Pick<User, 'id'> | null;
};

export default function Navbar(props: Props) {
  // Get the current path using usePathname hook
  const currentPath = usePathname();

  // Define navigation links based on user authentication status
  const links = [
    { label: 'Transfers', href: '/transfers' },
    { label: 'News', href: '/news' },
    { label: 'Teams', href: '/teams' },
    ...(props.user
      ? [{ label: 'Profile', href: `/profile/${props.user.id}` }]
      : [
          { label: 'Login', href: '/login' },
          { label: 'Register', href: '/register' },
        ]),
  ] as const;

  return (
    // Navigation bar component
    <nav className="navbar border-b z-10 justify-between px-4 lg:px-0 m-1">
      <div className="flex items-center">
        <Link href="/" className="btn btn-ghost text-xl ">
          <Image src="/logo/logo.webp" alt="Logo" width={50} height={50} />
        </Link>
      </div>
      <div className="hidden sm:flex">
        <ul className="space-x-6 menu menu-horizontal px-2 flex-nowrap font-bold">
          {links.map((link) => (
            <li key={`link-${link.href}`}>
              <Link
                className={classnames({
                  'text-zinc-900': link.href === currentPath,
                  'text-zinc-500': link.href !== currentPath,
                  'hover:text-zinc-800 transition-colors': true,
                })}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>{props.user && <LogoutButton />}</li>
        </ul>
      </div>
      <div className="navbar-end m-1">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1 sm:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
            <ul className="dropdown-content z-[1] bg-white menu p-2 shadow rounded-box w-52 top-10">
              {links.map((link) => (
                <li key={`link-${link.href}`}>
                  <Link
                    className={classnames({
                      'text-zinc-900': link.href === currentPath,
                      'text-zinc-500': link.href !== currentPath,
                      'hover:text-zinc-800 transition-colors': true,
                    })}
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>{props.user && <LogoutButton />}</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
