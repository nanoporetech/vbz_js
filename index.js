import * as ZSTD from './zstd/zstd-codec';
const zstdWasm = require('./zstd/zstd-codec-binding-wasm.js');
import { vbz } from './vbz';

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

    let decompressed; 
    testfunc(d, options).then((res) => {
        decompressed = res;
    })

    return Buffer.from(decompressed);
};

const testfunc = async (d, options) => {
    // const myvar = ZSTD.run((zstd) => {
    //     // const options = options || new vbz.VbzOptions(true, 2, 0, 0, zstd);
    //     options.zstd = zstd;
    //     const decomp = vbz.decompress_with_size(d, options)
    //     return decomp;
    // }); 

    // Export OnReady
    // Call 
    let myvar;

    // const Module = {};
    // Module['onRuntimeInitialized'] = () => {
    //     console.log("Run time initialised");
    //     options.zstd = ZSTD.onReady(Module);
    //     const decomp = vbz.decompress_with_size(d, options)
    //     myvar = decomp;
    //     return decomp;
    // };

    const myMod = await zstdWasm();
    options.zstd = ZSTD.onReady(myMod);
    const decomp = vbz.decompress_with_size(d, options)
    // options.zstd = ZSTD.onReady(Module);
    // const decomp = vbz.decompress_with_size(d, options)
    
    console.log("MYMOD is", myMod);
    console.log("myvar is", myvar);
    let counter = 0;
    return myvar;
}

const testfunc2 = () => {

}

module.exports = { decompress, vbz }
