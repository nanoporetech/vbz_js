//const ZstdCodec = require('zstd-codec').ZstdCodec;

const uncompressed_data = new Int16Array([5, 4, 3, 2, 1]);
const int_encoded_data = new Int8Array([0, 0, 10, 1, 1, 1, 1]);

/*const zstd_level = 1;

ZstdCodec.run(zstd => {
    const simple = new zstd.Simple();
    const compressed_data = simple.compress(int_encoded_data, zstd_level);

    console.log(uncompressed_data);
    console.log(int_encoded_data);
    console.log(compressed_data);
});*/

function make_random_data() {
    let arr = [];
    for (let i = 0; i < 5000 + Math.random() * 10000000; ++i) {
        arr.push(Math.floor(Math.random() * 101));
    }
    return new Int16Array(arr);
};

function make_random_data_array() {
    let datas = [];
    for (let i = 0; i < 10000; ++i) {
        datas.push(make_random_data());
    }
    return datas;
};

profile_byte_processing_block = function (action_name, func) {
    const start_ms = performance.now();
    const bytes_total = func();
    const end_ms = performance.now();

    const seconds_duration = (end_ms - start_ms) / 1000.0;
    const bytes_per_second = bytes_total / seconds_duration;
    const megabytes_per_second = bytes_per_second / (1000 * 1000);
    console.log(`Took ${seconds_duration.toFixed(2)}s to ${action_name} ${bytes_total} bytes. ${megabytes_per_second.toFixed(3)} megabytes per second`);
}

do_compress_benchmark = function (zstd_lvl) {
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

do_decompress_benchmark = function (zstd_lvl) {
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