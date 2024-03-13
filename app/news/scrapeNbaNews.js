import puppeteer from 'puppeteer';

export async function scrapeNBAnews() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.nba.com/news');

  const articles = await page.evaluate(() => {
    const articleNodes = document.querySelectorAll(
      '.MultiLineEllipsis_ellipsis___1H7z',
    );
    console.log(articleNodes);
    const articles = [];

    articleNodes.forEach((node) => {
      const title = node.querySelector('.title').innerText;
      const summary = node.querySelector('.summary').innerText;
      const link = node.querySelector('a').href;

      articles.push({ title, summary, link });
    });

    return articles;
  });

  await browser.close();
  return articles;
}

scrapeNBAnews()
  .then((news) => console.log(news))
  .catch((err) => console.error('Error scraping NBA news:', err));
