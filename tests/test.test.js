const puppeteer = require('puppeteer');
const fs = require("fs");

let browser;
let page = null;

describe("VBZ Compression / Decompression Browser", () => {
  beforeEach(async () => {
    browser = await puppeteer.launch({ dumpio: true });
    page = await browser.newPage();
  });

  afterEach(async () => {
    await browser.close();
  })

  it("should setup the correct page", async () => {
    await setup();
    await expect(page.title()).resolves.toMatch("VBZ JS Example");
  });
});

const evaluateResult = async (divTag = "#result") => {
  const div = await page.$(divTag);
  let result = await page.evaluate((div) => {
    if(div && typeof div.innerHTML === 'string') {
      return JSON.parse(div.innerHTML)
    } else {
      return div.innerHTML;
    }
  }, div);
  result = JSON.parse(result);
  return result;
}

const setup = async (method, posteriors, params) => {
  if (method && posteriors) {
    await windowSet(page, "method", method);
    await windowSet(page, "posteriors", JSON.stringify(posteriors), false);
    params !== undefined && await windowSet(page, "params", JSON.stringify(params), false);
  }
  
  const contentHtml = fs.readFileSync(`${__dirname}/index.html`, 'utf8');
  await page.setContent(contentHtml);
};

const windowSet = (page, name, value, isString = true) => {
  page.evaluateOnNewDocument(`
    Object.defineProperty(window, '${name}', {
      get() {
        if(${isString}) return '${value}'
        return ${value}
      }
    })
  `);
};
