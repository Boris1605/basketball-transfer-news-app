'use client';

// import Image from "next/image";
import classnames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { User } from '../../database/users';

type Props = {
  user: Pick<User, 'email'> | undefined;
};

export default function Navbar(props: Props) {
  const currentPath = usePathname();

  const links = [
    { label: 'Transfers', href: '/transfers' },
    { label: 'News', href: '/news' },
    { label: 'Teams', href: '/teams' },
    { label: 'Login', href: '/login' },
    { label: 'Register', href: '/register' },
    // { label: props.user?.email, href: `/profile/${props.user?.email}` },
    { label: 'Profile', href: `/profile/${props.user?.email}` },
  ] as const;

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        Logo
        {/* <Image src={} alt="Logo" /> */}
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={`link-${link.href}`}
            className={classnames({
              'text-zinc-900': link.href === currentPath,
              'text-zinc-500': link.href !== currentPath,
              'hover:text-zinc-800 transition-colors': true,
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
}
