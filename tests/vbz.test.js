const puppeteer = require("puppeteer");

let browser;
let page;
describe("VBZ Compression / Decompression", () => {

    beforeAll(async () => {
        browser = await puppeteer.launch({ dumpio: true });
        page = await browser.newPage();
        await page.addScriptTag({ path: "./dist/bundle-test.js" });
        await page.waitForFunction(() => document.readyState === "complete");
    });

    afterAll(async () => {
        await browser.close();
    });

    it.only("should return correct byte size", async () => {
        const refMethod = () => {
            const testArray = [2, 5, 10];
            let dataArray = [];

            for (testData of testArray) dataArray.push(window.vbzjs.vbz.streamvbyte_max_compressedbytes(testData));
            
            return dataArray;
        };
        const data = await page.evaluate(refMethod);
        expect(data).toEqual([25, 38, 59]);
    });

});
