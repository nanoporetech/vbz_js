import { ZstdCodec } from 'zstd-codec';
import { vbz } from './vbz';

const compress = (zstd_lvl) => {

    return new Promise(res => {
        ZstdCodec.run((zstd) => {
            const options = new vbz.VbzOptions(true, 2, zstd_lvl, 0, zstd);
    
            let random_datas = make_random_data_array();
            let compressed_random_datas = [];
            for (let d_idx in random_datas) {
                const d = random_datas[d_idx];
                compressed_random_datas.push(vbz.compress_with_size(d, options));
            }
            
            res(compressed_random_datas);
        });
    })
};

module.exports = { compress, ZstdCodec, vbz }
