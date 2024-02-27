// import Image from "next/image";
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="p-0 my-5 bg-orange-400 text-xl hover:bg-orange-500 ">
      <Link href="/">
        Home
        {/* <Image src={} alt="Logo" /> */}
      </Link>
      <Link href="/transfers">Transfers</Link>
      <Link href="/news">News</Link>
      <Link href="/teams">Teams</Link>
    </div>
  );
}
