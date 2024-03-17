import Link from 'next/link';

export default function RootNotFound() {
  return (
    <div className="rounded-lg overflow-hidden shadow-2xl p-6 border m-5">
      Sorry this page was not found make sure you visit a page that exists
      <div>
        <Link className="btn btn-active" href="/">
          Return Home
        </Link>
      </div>
    </div>
  );
}
