# VBZ JS

JS bindings for [VBZ Compression](https://github.com/nanoporetech/vbz_compression).

# Dependencies

EMCC - https://emscripten.org/docs/getting_started/downloads.html

Tip: If installed but EMCC not found in VSCode, download the repo, cd into it and activate the env vars:

```
source ./emsdk_env.sh
```

# Build

```bash
cd streamvbyte
./build.sh
cd ..
npm run build:node
```

Currently the no SIMD version has been dropped. To build:

```
# Remove the line `#include <xmmintrin.h>` from streamvbyte_wasm.c
./build-no-simd.sh
```

# Testing

Run tests via jest
To do: Move all tests from test_script.js to vbz.test.js

```
npm run build:test
npm run test
```
