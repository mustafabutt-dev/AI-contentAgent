'use server'
import axios from 'axios';
import * as cheerio from 'cheerio';

export async function scrapeBlogTitle(url) {
  try {
    const { data } = await axios.get(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
          'Accept-Language': 'en-US,en;q=0.9'
        }
      });
    const $ = cheerio.load(data);

    const h1 = $('h1').first().text();
    return h1 ;
  } catch (error) {
    console.error('Error scraping:', error.message);
    return null;
  }
}

export async function scrapArticleList(url:string) {
  const titles = [];
  let nextPageUrl = url;
  try {
    while (nextPageUrl) {
      console.log(`Fetching: ${nextPageUrl}`);
      const { data } = await axios.get(nextPageUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
          'Accept-Language': 'en-US,en;q=0.9'
        }
      });

      const $ = cheerio.load(data);

      // ✅ Extract titles from this page
      $('article.post-entry header.entry-header h2').each((_, el) => {
        const title = $(el).text().trim();
        if (title) titles.push(title);
      });

      // 🔍 Find the "Next" pagination link
      const nextLink = $('nav.pagination a.next').attr('href');
      if (nextLink) {
        // Build full URL if it's relative
        nextPageUrl = nextLink.startsWith('http')
          ? nextLink
          : `https://blog.aspose.com${nextLink}`;
      } else {
        nextPageUrl = null;
      }
    }

    console.log(`✅ Fetched ${titles.length} titles in total.`);
    return titles;

  } catch (err) {
    console.error('Error scraping:', err.message);
  }
}