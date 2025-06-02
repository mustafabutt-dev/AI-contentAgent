'use server'
import axios from 'axios';
import * as cheerio from 'cheerio';

export async function scrapeBlogTitle(url) {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    // Optional: Get <h1> if you want the blog's header instead
    const h1 = $('h1').first().text();
    return h1 ;
  } catch (error) {
    console.error('Error scraping:', error.message);
    return null;
  }
}