import { ZstdCodec } from 'zstd-codec';
import { vbz } from './vbz';

const decompress = (d, zstd_lvl = 0, promise = false) => {
    if(!promise) {
        const options = new vbz.VbzOptions(true, 2, zstd_lvl, 0, false);
        return vbz.decompress_with_size(d, options)
    }

    return new Promise(res => {
        ZstdCodec.run((zstd) => {
            const options = new vbz.VbzOptions(true, 2, zstd_lvl, 0, zstd);
            const decompressed = vbz.decompress_with_size(d, options)
            
            res(decompressed);
        });
    })
};

module.exports = { decompress, ZstdCodec, vbz }
