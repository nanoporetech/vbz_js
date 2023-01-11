# VBZ JS

JS bindings for [VBZ Compression](https://github.com/nanoporetech/vbz_compression).

# Dependencies
EMCC - https://emscripten.org/docs/getting_started/downloads.html

Tip: If installed but EMCC not found in VSCode, download the repo, cd into it and activate the env vars:
```
source ./emsdk_env.sh
```

Build
```
cd streamvbyte
.build.sh
```

Build No SIMD File: 
1. Remove the line below from streamvbyte_wasm.c

```
#include <xmmintrin.h>
```

2. Within the build.sh file located in the streamvbyte directory change:
    - Remove the flags
        ```
        -msimd128 -msse
        ```
    - Change the following
        ```
        -o streamvbyte.mjs
        cp ./streamvbyte.mjs ../dist/
        rm ./streamvbyte.mjs
        ```
    - To
        ```
        -o streamvbyte-no-simd.mjs
        cp ./streamvbyte-no-simd.mjs ../dist/
        rm ./streamvbyte-no-simd.mjs
        ```

3. Then build as normal.
```
cd streamvbyte
.build.sh
```


# Testing
Run tests via jest
To do: Move all tests from test_script.js to vbz.test.js
```
yarn build:test
yarn test
```