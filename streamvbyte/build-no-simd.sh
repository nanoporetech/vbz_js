emcc -O3 --source-map-base -gsource-map -s WASM=1 -s TOTAL_STACK=8mb -s ALLOW_MEMORY_GROWTH=1 -s SINGLE_FILE -s ASSERTIONS=1 -s EXPORTED_FUNCTIONS="['_zigzag_delta_encode']" -s EXPORTED_RUNTIME_METHODS='["cwrap", "writeArrayToMemory"]' \
    streamvbyte_wasm.c -o streamvbyte-no-simd.mjs

mkdir -p ../dist/

cp ./streamvbyte-no-simd.mjs ../dist/
rm ./streamvbyte-no-simd.mjs
