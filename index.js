const zstdWasm = require('./zstd/zstd-codec-binding-wasm.js');

import { ZstdCodec } from 'zstd-codec';
import { vbz } from './vbz';

window.ZSTD = null;
const myCodec = ZstdCodec.run(zstd => window.ZSTD = zstd);


const decompress = (d, options = null) => {
    const decompressed = decompressWithZSTD(d, options);
    const myVal = decompressed.buffer;
    return myVal;
};

const decompressWithZSTD = (d, options) => {
    options.zstd = window.ZSTD;
    const decomp = vbz.decompress_with_size(d, options)
    return decomp;
}

module.exports = { decompress, vbz }
