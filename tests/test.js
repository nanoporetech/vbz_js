const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ dumpio: true });
    const page = await browser.newPage();

    await page.addScriptTag({ path: './dist/bundle.js' });

    const refMethod = () => {
        return window; // either expose bundle methods to window or load module
    }

    const data = await page.evaluate(refMethod);
    console.log(data);
    
    await browser.close();
})();