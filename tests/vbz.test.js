const puppeteer = require("puppeteer");

describe("VBZ Compression / Decompression", () => {
    it.only("should return correct byte size", async () => {
        const browser = await puppeteer.launch({ dumpio: true });
        const page = await browser.newPage();
        await page.addScriptTag({ path: "./dist/bundle.js" });

        const refMethod = () => {
            testData = [2, 5, 10];
            dataArray = [];
            dataArray.push(window.vbzjs.vbz.streamvbyte_max_compressedbytes(testData[0]));
            dataArray.push(window.vbzjs.vbz.streamvbyte_max_compressedbytes(testData[1]));
            dataArray.push(window.vbzjs.vbz.streamvbyte_max_compressedbytes(testData[2]));
            return dataArray;
        };

        await page.waitForFunction(() => document.readyState === "complete");
        const data = await page.evaluate(refMethod);
        expect(data).toEqual([25, 38, 59]);
        await browser.close();
    });

});
