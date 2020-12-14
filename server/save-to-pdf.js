const express = require('express');
const puppeteer = require('puppeteer');
const app = express();

(async () => {
   let browser = await puppeteer.launch({ headless: true });
   const page = await browser.newPage();

   // Navigates to the project README file
   await page.goto('http://localhost:8000/fca/display_print_ad/31244/?creative_identifier=16-9-4-7-11');

   // Generates a PDF from the page content
   await page.pdf({ path: './print_ad.pdf' });

   await browser.close();

})();