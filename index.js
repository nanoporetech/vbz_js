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

const compress = (d, options) => {
    options.zstd = ZSTD;
    const comp = vbz.compress_with_size(d, options)
    return comp;
}

if(typeof window === 'object'){
    ZstdCodec.run(zstd => window.zstd = zstd);
    window.vbzjs = {vbz, decompress, compress };
}

export { decompress, vbz }
