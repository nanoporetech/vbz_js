const ZstdCodec = require('zstd-codec');

class VbzOptions {
    constructor(perform_delta_zig_zag, integer_size, zstd_compression_level, vbz_version, zstd) {
        this.perform_delta_zig_zag = perform_delta_zig_zag;
        this.integer_size = integer_size;
        this.zstd_compression_level = zstd_compression_level;
        this.vbz_version = vbz_version;
        this.zstd = zstd;

        if (this.zstd_compression_level != 0 && !this.zstd) {
            throw new Error("js_vbz zstd compression requires a zstd reference");

        }

        if (this.vbz_version != 0) {
            throw new Error("js_vbz only supports v0 vbz");
        }

        if (this.integer_size != 0 && this.integer_size != 2) {
            throw new Error("js_vbz int compression is only for 2 byte integers");
        }

        if (this.perform_delta_zig_zag && this.integer_size != 2) {
            throw new Error("js_vbz delta zig zag is only for 2 byte integers");
        }
    }
};

const zigzag_delta_encode = Module.cwrap('zigzag_delta_encode', null, ['number', 'number', 'number', 'number']);
const zigzag_delta_decode = Module.cwrap('zigzag_delta_decode', null, ['number', 'number', 'number', 'number']);
const streamvbyte_encode = Module.cwrap('streamvbyte_encode', 'number', ['number', 'number', 'number']);
const streamvbyte_decode = Module.cwrap('streamvbyte_decode', 'number', ['number', 'number', 'number']);

// Compress an Int??Array.
function compress(to_compress, options) {
    const stack_top = stackSave();

    try {
        let compressed_out = null;
        if (options.integer_size != 0) {
            if (to_compress.byteLength % options.integer_size != 0) {
                throw new Error(`expected a data view with no remainder for delta zig zag compression ${to_compress.byteLength}/${options.integer_size}`);
            }

            const to_encode_size = to_compress.length * 4; // encode expects a 32 bit input number
            const to_encode_buffer_ptr = stackAlloc(to_encode_size);

            if (options.perform_delta_zig_zag) {
                const in_size = to_compress.byteLength;
                let in_buffer_ptr = stackAlloc(in_size);
                writeArrayToMemory(new Int8Array(to_compress.buffer), in_buffer_ptr);

                zigzag_delta_encode(in_buffer_ptr, to_encode_buffer_ptr, to_compress.length, 0);
            }
            else {
                assert(false); // need to actualy upcast to 32 bit ints here...
                throw "Didn't write this yet";
                //writeArrayToMemory(new Int8Array(to_compress.buffer), to_encode_buffer_ptr);
            }

            const out_buffer_capacity = to_compress.length * 6; // total guess.
            const out_buffer_ptr = stackAlloc(out_buffer_capacity);
            const out_buffer_size = streamvbyte_encode(to_encode_buffer_ptr, to_compress.length, out_buffer_ptr);

            compressed_out = new Int8Array(wasmMemory.buffer, out_buffer_ptr, out_buffer_size);
        }

        if (options.zstd_compression_level == 0) {
            let output_copy = new Int8Array(compressed_out.length);
            output_copy.set(compressed_out)
            return output_copy;
        }

        var zstd_simple = new options.zstd.Simple();
        return zstd_simple.compress(compressed_out);
    }
    finally {
        stackRestore(stack_top);
    }
};

function compress_with_size(to_compress, options) {
    const compressed = compress(to_compress, options);

    let buffer = new ArrayBuffer(compressed.length + 4);
    let data_section = new Int8Array(buffer, 4, compressed.length);
    let header_section = new Int32Array(buffer, 0, 1);
    header_section[0] = to_compress.length;
    data_section.set(compressed);

    return new Int8Array(buffer);
};

function decompress(to_decompress, out_size, options) {
    const stack_top = stackSave();
    try {
        let decompressed_out = to_decompress;
        if (options.zstd_compression_level != 0) {
            var zstd_simple = new options.zstd.Simple();
            decompressed_out = zstd_simple.decompress(decompressed_out);
        }

        if (options.integer_size != 0) {
            const in_size = decompressed_out.byteLength;
            let encoded_buffer_ptr = stackAlloc(in_size);
            writeArrayToMemory(new Int8Array(decompressed_out), encoded_buffer_ptr);

            const decoded_size = out_size * 6; // total guess.
            const decoded_buffer_ptr = stackAlloc(decoded_size);

            const out_buffer_size = streamvbyte_decode(encoded_buffer_ptr, decoded_buffer_ptr, out_size);
            if (out_buffer_size != in_size) {
                throw "Bad output size";
            }

            if (options.perform_delta_zig_zag) {
                const decompressed_buffer_size = out_size * options.integer_size;
                let decompressed_buffer_ptr = stackAlloc(decompressed_buffer_size);

                zigzag_delta_decode(decoded_buffer_ptr, decompressed_buffer_ptr, out_size, 0);
                let decompressed_buffer_cast = new Int32Array(wasmMemory.buffer, decompressed_buffer_ptr, out_size);
                decompressed_out = new Int16Array(decompressed_buffer_cast);
            }
            else {
                assert(false); // need to actualy cast to 16 bit ints here...
                throw "Didn't write this yet";
                //writeArrayToMemory(new Int8Array(to_compress.buffer), to_encode_buffer_ptr);
            }
        }
        return decompressed_out;
    }
    finally {
        stackRestore(stack_top);
    }
};

function decompress_with_size(to_decompress, options) {
    let data_section = new Int8Array(to_decompress.buffer, 4, to_decompress.length - 4);
    let header_section = new Int32Array(to_decompress.buffer, 0, 1);

    return decompress(data_section, header_section[0], options);
};

module.vbz = {};
module.exports.vbz = {
    compress: compress,
    compress_with_size: compress_with_size,
    decompress: decompress,
    decompress_with_size: decompress_with_size,
    VbzOptions: VbzOptions
};