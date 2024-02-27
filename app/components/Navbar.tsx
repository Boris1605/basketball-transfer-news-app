// import Image from "next/image";
import Link from 'next/link';

export default function Navbar() {
  const links = [
    { label: 'Transfers', href: '/transfers' },
    { label: 'News', href: '/news' },
    { label: 'Teams', href: '/teams' },
  ];

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
            className="text-zinc-500 hover:text-zinc-800 transition-colors"
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
}
