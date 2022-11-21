const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ dumpio: true });
    const page = await browser.newPage();

    await page.addScriptTag({ path: './dist/browser/index.js', type: 'module' });
    const result = await page.evaluate(() => {
        return window // will always be undefined, pass page.$(window) as second evaluation arg.
    });

    console.log(result);
    await browser.close();
})();
