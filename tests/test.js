const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ dumpio: true });
    const page = await browser.newPage();

    await page.addScriptTag({ path: './dist/browser/index.js', type: 'module' });
    const result = await page.evaluate(() => {
        return window
    });

    console.log(result);
    await browser.close();
})();