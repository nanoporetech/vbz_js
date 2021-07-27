emcc -O3 --source-map-base -gsource-map -s WASM=1 -s EXPORTED_FUNCTIONS="['_zigzag_delta_encode']" -s EXPORTED_RUNTIME_METHODS='["cwrap"]' \
    streamvbyte_wasm.c \
    -o streamvbyte.html


cp ./streamvbyte.js ../dist/
cp ./streamvbyte.wasm ../dist/