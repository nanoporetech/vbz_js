const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ dumpio: true });
    const page = await browser.newPage();

    await page.addScriptTag({ path: './dist/browser/index.js', type: 'module' });
    const generalInfo = await page.evaluate(() => {
        return window
    });

    console.log(generalInfo); // prints fooBarBaz
    await browser.close();
})();