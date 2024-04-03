import Link from 'next/link';
import { getNewsDummy } from '../../database/newsDummy';

export const metadata = {
  title: 'News page',
  description: 'News page',
};

export default function NewsPage() {
  const news = getNewsDummy;

  return (
    <div className="flex flex-col justify-center">
      {news.map((newsItem) => (
        <div
          className="max-w-[70%] rounded-lg overflow-hidden shadow-2xl p-6 border m-10 bg-white"
          key={`news-${newsItem.id}`}
        >
          <Link href={`/news/${newsItem.id}`}>
            <div className="font-bold">{newsItem.title}</div>
          </Link>
          <br />
          <div className="flex flex-col md:flex-row items-center">
            <img
              className="mb-3 md:mb-0 md:mr-3"
              src={newsItem.src}
              alt="show player"
              height={100}
              width={100}
            />
            <div>{newsItem.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
