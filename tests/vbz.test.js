const puppeteer = require("puppeteer");

describe("VBZ Compression / Decompression", () => {

    beforeAll(async () => {
        const browser = await puppeteer.launch({ dumpio: true });
        const page = await browser.newPage();
        await page.addScriptTag({ path: "./dist/bundle-test.js" });
        await page.waitForFunction(() => document.readyState === "complete");
    });

    afterAll(async () => {
        await browser.close();
    });

    it.only("should return correct byte size", async () => {
        const refMethod = () => {
            testData = [2, 5, 10];
            dataArray = [];
            dataArray.push(window.vbzjs.vbz.streamvbyte_max_compressedbytes(testData[0]));
            dataArray.push(window.vbzjs.vbz.streamvbyte_max_compressedbytes(testData[1]));
            dataArray.push(window.vbzjs.vbz.streamvbyte_max_compressedbytes(testData[2]));
            return dataArray;
        };
        const data = await page.evaluate(refMethod);
        expect(data).toEqual([25, 38, 59]);
    });

});
