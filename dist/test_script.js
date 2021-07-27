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

do_benchmark = function () {
    ZstdCodec.run((zstd) => {
        const options = new vbz.VbzOptions(true, 2, 1, 0, zstd);
        console.log("uncompressed ", uncompressed_data);
        let compressed = vbz.compress_with_size(uncompressed_data, options);
        console.log("compressed", compressed);

        let decompressed = vbz.decompress_with_size(compressed, options);
        console.log("decompressed", decompressed);
    });

};