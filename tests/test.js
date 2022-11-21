const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ dumpio: true });
    const page = await browser.newPage();

    await page.addScriptTag({ path: './dist/browser/index.js', type: 'module' });
    const window = await page.$('window');
    const result = await page.evaluate((window) => {
        return window
    }, window);

    console.log(result);
    await browser.close();
})();
