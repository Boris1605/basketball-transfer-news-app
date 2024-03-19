import Link from 'next/link';
import { getNewsDummy } from '../../database/newsDummy';
// import { scrapeNBAnews } from './scrapeNbaNews';

export const metadata = {
  title: 'News page',
  description: 'News page',
};

export default function NewsPage() {
  // Labels with news, title, desc, image(navbar map) show News comp // scrape nba.com
  // const news1 = await scrapeNBAnews();
  // console.log(news1);
  const news = getNewsDummy;
  return (
    <main>
      <div className="flex justify-center">
        <h1>News</h1>
        <div className="py-4">
          {news.map((news) => {
            return (
              <div
                className="max-w-[70%] rounded-lg overflow-hidden shadow-2xl p-6 border m-10"
                key={`news-${news.id}`}
              >
                <Link href={`/news/${news.id}`}>
                  <div className="font-bold">{news.title}</div>
                  {/* <div>
                    <img alt="shows player" height={100} width={100}>
                      {news.src}
                    </img>
                  </div> */}
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
