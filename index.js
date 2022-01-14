// import * as ZSTD from './zstd/zstd-codec';
const zstdWasm = require('./zstd/zstd-codec-binding-wasm.js');

import { ZstdCodec } from 'zstd-codec';
import { vbz } from './vbz';

window.ZSTD = null;
const myCodec = ZstdCodec.run(zstd => window.ZSTD = zstd);


const decompress = (d, options = null, promise = false,) => {
    console.log("Inside Decompress!!!");
    if(!promise) {
        console.log("Options param--- are:", options);
        //const options1 = options; //|| new vbz.VbzOptions(true, 2, 0, 0, false);
        //console.log("Data Buffer is ", d);
        const returnedData = vbz.decompress_with_size(d, options);
        //console.log("returned data is", returnedData);
        //console.log("return data buffer", Buffer.from(returnedData));
        return Buffer.from(returnedData);
    }

     
    const decompressed = testfunc(d, options);
    return Buffer.from(decompressed);
};

const testfunc = (d, options) => {
    // return await new Promise((resolve, reject) => {
    //     const myvar = ZstdCodec.run(zstd => {
    //         // const options = options || new vbz.VbzOptions(true, 2, 0, 0, zstd);
    //         options.zstd = zstd;
    //         const decomp = vbz.decompress_with_size(d, options)
    //         resolve(decomp);
    //     });
    // })

    options.zstd = window.ZSTD;
    const decomp = vbz.decompress_with_size(d, options)
    return decomp;
    

    // Delay Await for the callback

    // // Export OnReady
    // // Call 
    // let myvar;

    // // const Module = {};
    // // Module['onRuntimeInitialized'] = () => {
    // //     console.log("Run time initialised");
    // //     options.zstd = ZSTD.onReady(Module);
    // //     const decomp = vbz.decompress_with_size(d, options)
    // //     myvar = decomp;
    // //     return decomp;
    // // };

    // const myMod = await zstdWasm();
    // options.zstd = ZSTD.onReady(myMod);
    // const decomp = vbz.decompress_with_size(d, options)
    // // options.zstd = ZSTD.onReady(Module);
    // // const decomp = vbz.decompress_with_size(d, options)
    
    // console.log("MYMOD is", myMod);
    // console.log("myvar is", myvar);
    // let counter = 0;
    return myvar;
}

const testfunc2 = () => {

}

module.exports = { decompress, vbz }
