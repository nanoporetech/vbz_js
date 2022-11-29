#include "emscripten.h"

#include <stdint.h>
#include <stddef.h>
#include <stdio.h>
#include <string.h>

#include <xmmintrin.h>

static inline
uint32_t _zigzag_encode_32 (uint32_t val) {
	return (val + val) ^ ((int32_t)val >> 31);
}

EMSCRIPTEN_KEEPALIVE
void zigzag_delta_encode(const int16_t * in, uint32_t * out, size_t N, int16_t prev) {
    for (size_t i = 0; i < N; i++) {
      out[i] = _zigzag_encode_32(in[i] - prev);
      prev = in[i];
    }
}

static inline
int32_t _zigzag_decode_32 (uint32_t val) {
	return (val >> 1) ^ -(val & 1);
}

EMSCRIPTEN_KEEPALIVE
void zigzag_delta_decode(const uint32_t * in, int32_t * out, size_t N, int32_t prev) {
    for(size_t i = 0; i < N; i++) {
      int32_t val =_zigzag_decode_32(in[i]);
      out[i] = val + prev;
      prev += val;
    }
}

static uint8_t _encode_data(uint32_t val, uint8_t *__restrict__ *dataPtrPtr) {
  uint8_t *dataPtr = *dataPtrPtr;
  uint8_t code;

  if (val < (1 << 8)) { // 1 byte
    *dataPtr = (uint8_t)(val);
    *dataPtrPtr += 1;
    code = 0;
  } else if (val < (1 << 16)) { // 2 bytes
    memcpy(dataPtr, &val, 2);   // assumes little endian
    *dataPtrPtr += 2;
    code = 1;
  } else if (val < (1 << 24)) { // 3 bytes
    memcpy(dataPtr, &val, 3);   // assumes little endian
    *dataPtrPtr += 3;
    code = 2;
  } else { // 4 bytes
    memcpy(dataPtr, &val, sizeof(uint32_t));
    *dataPtrPtr += sizeof(uint32_t);
    code = 3;
  }

  return code;
}

static uint8_t *svb_encode_scalar(const uint32_t *in,
                                  uint8_t *__restrict__ keyPtr,
                                  uint8_t *__restrict__ dataPtr,
                                  uint32_t count) {
  if (count == 0)
    return dataPtr; // exit immediately if no data

  uint8_t shift = 0; // cycles 0, 2, 4, 6, 0, 2, 4, 6, ...
  uint8_t key = 0;
  for (uint32_t c = 0; c < count; c++) {
    if (shift == 8) {
      shift = 0;
      *keyPtr++ = key;
      key = 0;
    }
    uint32_t val = in[c];
    uint8_t code = _encode_data(val, &dataPtr);
    key |= code << shift;
    shift += 2;
  }

  *keyPtr = key;  // write last key (no increment needed)
  return dataPtr; // pointer to first unused data byte
}

EMSCRIPTEN_KEEPALIVE
size_t streamvbyte_encode(const uint32_t *in, uint32_t count, uint8_t *out) {
  uint8_t *keyPtr = out;
  uint32_t keyLen = (count + 3) / 4;  // 2-bits rounded to full byte
  uint8_t *dataPtr = keyPtr + keyLen; // variable byte data after all keys

  return svb_encode_scalar(in, keyPtr, dataPtr, count) - out;
}

static inline uint32_t _decode_data(const uint8_t **dataPtrPtr, uint8_t code) {
  const uint8_t *dataPtr = *dataPtrPtr;
  uint32_t val;

  if (code == 0) { // 1 byte
    val = (uint32_t)*dataPtr;
    dataPtr += 1;
  } else if (code == 1) { // 2 bytes
    val = 0;
    memcpy(&val, dataPtr, 2); // assumes little endian
    dataPtr += 2;
  } else if (code == 2) { // 3 bytes
    val = 0;
    memcpy(&val, dataPtr, 3); // assumes little endian
    dataPtr += 3;
  } else { // code == 3
    memcpy(&val, dataPtr, 4);
    dataPtr += 4;
  }

  *dataPtrPtr = dataPtr;
  return val;
}

static const uint8_t *svb_decode_scalar(uint32_t *outPtr, const uint8_t *keyPtr,
                                        const uint8_t *dataPtr,
                                        uint32_t count) {
  if (count == 0)
    return dataPtr; // no reads or writes if no data

  uint8_t shift = 0;
  uint32_t key = *keyPtr++;
  for (uint32_t c = 0; c < count; c++) {
    if (shift == 8) {
      shift = 0;
      key = *keyPtr++;
    }
    uint32_t val = _decode_data(&dataPtr, (key >> shift) & 0x3);
    *outPtr++ = val;
    shift += 2;
  }

  return dataPtr; // pointer to first unused byte after end
}

EMSCRIPTEN_KEEPALIVE
size_t streamvbyte_decode(const uint8_t *in, uint32_t *out, uint32_t count) {
  if (count == 0)
    return 0;

  const uint8_t *keyPtr = in;               // full list of keys is next
  uint32_t keyLen = ((count + 3) / 4);      // 2-bits per key (rounded up)
  const uint8_t *dataPtr = keyPtr + keyLen; // data starts at end of keys

  return svb_decode_scalar(out, keyPtr, dataPtr, count) - in;
}

EMSCRIPTEN_KEEPALIVE
size_t streamvbyte_max_compressedbytes(const uint32_t length) {
   // number of control bytes:
   size_t cb = (length + 3) / 4;
   // maximum number of control bytes:
   size_t db = (size_t) length * sizeof(uint32_t);
   return cb + db + 16;
}
