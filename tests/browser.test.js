const puppeteer = require('puppeteer');
const fs = require("fs");

let browser;
let page = null;

//const ZstdCodec = require('zstd-codec').ZstdCodec;

/*const zstd_level = 1;

ZstdCodec.run(zstd => {
    const simple = new zstd.Simple();
    const compressed_data = simple.compress(int_encoded_data, zstd_level);

    console.log(uncompressed_data);
    console.log(int_encoded_data);
    console.log(compressed_data);
});*/

const make_random_data = () => {
    let arr = [];
    for (let i = 0; i < 5000 + Math.random() * 10000000; ++i) {
        arr.push(Math.floor(Math.random() * 101));
    }
    return new Int16Array(arr);
};

const make_random_data_array = () => {
    let datas = [];
    for (let i = 0; i < 10000; ++i) {
        datas.push(make_random_data());
    }
    return datas;
};

const profile_byte_processing_block = (action_name, func) => {
    const start_ms = performance.now();
    const bytes_total = func();
    const end_ms = performance.now();

    const seconds_duration = (end_ms - start_ms) / 1000.0;
    const bytes_per_second = bytes_total / seconds_duration;
    const megabytes_per_second = bytes_per_second / (1000 * 1000);
    console.log(`Took ${seconds_duration.toFixed(2)}s to ${action_name} ${bytes_total} bytes. ${megabytes_per_second.toFixed(3)} megabytes per second`);
}

const do_compress_benchmark = (zstd_lvl) => {
    ZstdCodec.run((zstd) => {
        const options = new vbz.VbzOptions(true, 2, zstd_lvl, 0, zstd);
        let random_datas = make_random_data_array();

        profile_byte_processing_block("compress", () => {
            let input_size = 0;
            let compressed_size = 0;
            let read_count = 0;
            for (let d_idx in random_datas) {
                const d = random_datas[d_idx];
                read_count += 1
                input_size += d.byteLength;
                let compressed = vbz.compress_with_size(d, options);
                compressed_size += compressed.byteLength;
            }
            return input_size;
        });

    });
};

const do_decompress_benchmark = (zstd_lvl) => {
    ZstdCodec.run((zstd) => {
        const options = new vbz.VbzOptions(true, 2, zstd_lvl, 0, zstd);

        let random_datas = make_random_data_array();
        let compressed_random_datas = [];
        for (let d_idx in random_datas) {
            const d = random_datas[d_idx];
            compressed_random_datas.push(vbz.compress_with_size(d, options));
        }

        profile_byte_processing_block("decompress", () => {
            let input_size = 0;
            let compressed_size = 0;
            let read_count = 0;
            for (let d_idx in compressed_random_datas) {
                const d = compressed_random_datas[d_idx];
                read_count += 1
                input_size += d.byteLength;
                let compressed = vbz.decompress_with_size(d, options);
                compressed_size += compressed.byteLength;
            }
            return input_size;
        });
    });
};

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
   
  it("should do compress benchmark", async () => {
    const uncompressed_data = new Int16Array([5, 4, 3, 2, 1]);
    const int_encoded_data = new Int8Array([0, 0, 10, 1, 1, 1, 1]);
    
    await setup("do_compress_benchmark", {uncompressed_data, int_encoded_data});

    const result = await evaluateResult();

    expect(result).toBe({});
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

const setup = async (method, params) => {
  if (method) {
    await windowSet(page, "method", method);
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
