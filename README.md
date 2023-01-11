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

2. Build
```
cd streamvbyte
.build-no-simd.sh
```

# Testing
Run tests via jest
To do: Move all tests from test_script.js to vbz.test.js
```
yarn build:test
yarn test
```