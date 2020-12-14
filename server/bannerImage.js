/**
 * @param {null} aNull
 * @param {undefined} anUndefined
 * @param {boolean} aBoolean
 * @param {string} aString
 * @param {Array} anArray
 * @param {Object} anObject
 */

const express = require('express');
const puppeteer = require('puppeteer');
const app = express();

let address = 'http://localhost:8000/fca/display_print_ad/31244/?creative_identifier=16-9-4-7-11';

(async () => {
   let browser = await puppeteer.launch({ headless: true });
   const page = await browser.newPage();

   await page.setViewport({
      width: 736,
      height: 736,
      deviceScaleFactor: 1,
  });

   await page.goto(address, { waitUntil: 'networkidle2' })

   await page.screenshot({
      path: 'puppeteer.jpeg',
      clip: {x: 0, y: 0, width: 736, height: 736}
   })
   await browser.close();

})();

// await page.goto(address).then(async (msg) => {
//    console.log('--------------------------------------------');
//    if (msg.ok !== true) {
//        console.log('Unable to load the address!');
//        await browser.close();
//    } else {
//        await page.screenshot({path: 'puppeteer.png'});
//        await browser.close();
// }
// })
