import Link from 'next/link';
import { getNewsDummy } from '../../database/newsDummy';
// import { scrapeNBAnews } from './scrapeNbaNews';

export const metadata = {
  title: 'News page',
  description: 'news page',
};

export default function NewsPage() {
  // Labels with news, title, desc, image(navbar map) show News comp // scrape nba.com
  // const news = scrapeNBAnews();
  const news = getNewsDummy;
  return (
    <main>
      <div>
        <h1>News</h1>
        <div className="py-4">
          {news.map((news) => {
            return (
              <div
                className="max-w-sm rounded-lg shadow-2xl px-6 py-4"
                key={`news-${news.id}`}
              >
                <Link href={`/news/${news.id}`}>
                  <div>{news.title}</div>
                  <br />
                  <div>{news.content}</div>
                </Link>
                <br />
              </div>
            );
          })}
        </div>
        {/* <div>{news}</div> */}
      </div>
    </main>
  );
}
