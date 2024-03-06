import Link from 'next/link';
import { getNewsDummy } from '../../database/newsDummy';

export const metadata = {
  title: 'News page',
  description: 'news page',
};

export default function NewsPage() {
  // Labels with news, title, desc, image(navbar map) show News comp // scrape nba.com
  const news = getNewsDummy;
  return (
    <div>
      <h1>News</h1>
      <div>
        {' '}
        {news.map((news) => {
          return (
            <div key={`news-${news.id}`}>
              <Link href={`/news/${news.id}`}>
                <div>{news.title}</div>
                <br />
                <div>{news.content}</div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
