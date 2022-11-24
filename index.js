import { ZstdCodec } from 'zstd-codec';
import { vbz } from './vbz';

let ZSTD = null;
ZstdCodec.run(zstd => ZSTD = zstd);

const decompress = (d, options = null) => {
    const decompressed = decompressWithZSTD(d, options);
    const myVal = decompressed.buffer;
    return myVal;
};

const decompressWithZSTD = (d, options) => {
    options.zstd = ZSTD;
    const decomp = vbz.decompress_with_size(d, options)
    return decomp;
}

export { decompress, vbz }
