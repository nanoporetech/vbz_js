var $pCMe3$process = require("process");
var $pCMe3$zstdcodec = require("zstd-codec");

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequiree2c5"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequiree2c5"] = parcelRequire;
}
parcelRequire.register("210k2", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $50ed3c96df748c7a$export$2e2bcd8739ae039);

var $50ed3c96df748c7a$var$Module = (()=>{
    var _scriptDir = "file:///dist/streamvbyte.mjs";
    return function(Module = {}) {
        var Module = typeof Module != "undefined" ? Module : {};
        var readyPromiseResolve, readyPromiseReject;
        Module["ready"] = new Promise(function(resolve, reject) {
            readyPromiseResolve = resolve;
            readyPromiseReject = reject;
        });
        [
            "_zigzag_delta_encode",
            "_zigzag_delta_decode",
            "_streamvbyte_encode",
            "_streamvbyte_decode",
            "_streamvbyte_max_compressedbytes",
            "_fflush",
            "onRuntimeInitialized"
        ].forEach((prop)=>{
            if (!Object.getOwnPropertyDescriptor(Module["ready"], prop)) Object.defineProperty(Module["ready"], prop, {
                get: ()=>abort("You are getting " + prop + " on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js"),
                set: ()=>abort("You are setting " + prop + " on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")
            });
        });
        var moduleOverrides = Object.assign({}, Module);
        var arguments_ = [];
        var thisProgram = "./this.program";
        var quit_ = (status, toThrow)=>{
            throw toThrow;
        };
        var ENVIRONMENT_IS_WEB = true;
        var ENVIRONMENT_IS_WORKER = false;
        var ENVIRONMENT_IS_NODE = false;
        var ENVIRONMENT_IS_SHELL = false;
        if (Module["ENVIRONMENT"]) throw new Error("Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)");
        var scriptDirectory = "";
        function locateFile(path) {
            if (Module["locateFile"]) return Module["locateFile"](path, scriptDirectory);
            return scriptDirectory + path;
        }
        var read_, readAsync, readBinary, setWindowTitle;
        function logExceptionOnExit(e) {
            if (e instanceof ExitStatus) return;
            let toLog = e;
            if (e && typeof e == "object" && e.stack) toLog = [
                e,
                e.stack
            ];
            err("exiting due to exception: " + toLog);
        }
        if (ENVIRONMENT_IS_SHELL) {
            if (typeof $pCMe3$process == "object" && true || typeof window == "object" || typeof importScripts == "function") throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
            if (typeof read != "undefined") read_ = function shell_read(f) {
                const data = tryParseAsDataURI(f);
                if (data) return intArrayToString(data);
                return read(f);
            };
            readBinary = function readBinary(f) {
                let data;
                data = tryParseAsDataURI(f);
                if (data) return data;
                if (typeof readbuffer == "function") return new Uint8Array(readbuffer(f));
                data = read(f, "binary");
                assert(typeof data == "object");
                return data;
            };
            readAsync = function readAsync(f, onload, onerror) {
                setTimeout(()=>onload(readBinary(f)), 0);
            };
            if (typeof clearTimeout == "undefined") globalThis.clearTimeout = (id)=>{};
            if (typeof scriptArgs != "undefined") arguments_ = scriptArgs;
            else if (typeof arguments != "undefined") arguments_ = arguments;
            if (typeof quit == "function") quit_ = (status, toThrow)=>{
                logExceptionOnExit(toThrow);
                quit(status);
            };
            if (typeof print != "undefined") {
                if (typeof console == "undefined") console = {};
                console.log = print;
                console.warn = console.error = typeof printErr != "undefined" ? printErr : print;
            }
        } else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
            if (ENVIRONMENT_IS_WORKER) scriptDirectory = self.location.href;
            else if (typeof document != "undefined" && document.currentScript) scriptDirectory = document.currentScript.src;
            if (_scriptDir) scriptDirectory = _scriptDir;
            if (scriptDirectory.indexOf("blob:") !== 0) scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1);
            else scriptDirectory = "";
            if (!(typeof window == "object" || typeof importScripts == "function")) throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
            read_ = (url)=>{
                try {
                    var xhr = new XMLHttpRequest;
                    xhr.open("GET", url, false);
                    xhr.send(null);
                    return xhr.responseText;
                } catch (err) {
                    var data = tryParseAsDataURI(url);
                    if (data) return intArrayToString(data);
                    throw err;
                }
            };
            if (ENVIRONMENT_IS_WORKER) readBinary = (url)=>{
                try {
                    var xhr = new XMLHttpRequest;
                    xhr.open("GET", url, false);
                    xhr.responseType = "arraybuffer";
                    xhr.send(null);
                    return new Uint8Array(xhr.response);
                } catch (err) {
                    var data = tryParseAsDataURI(url);
                    if (data) return data;
                    throw err;
                }
            };
            readAsync = (url, onload, onerror)=>{
                var xhr = new XMLHttpRequest;
                xhr.open("GET", url, true);
                xhr.responseType = "arraybuffer";
                xhr.onload = ()=>{
                    if (xhr.status == 200 || xhr.status == 0 && xhr.response) {
                        onload(xhr.response);
                        return;
                    }
                    var data = tryParseAsDataURI(url);
                    if (data) {
                        onload(data.buffer);
                        return;
                    }
                    onerror();
                };
                xhr.onerror = onerror;
                xhr.send(null);
            };
            setWindowTitle = (title)=>document.title = title;
        } else throw new Error("environment detection error");
        var out = Module["print"] || console.log.bind(console);
        var err = Module["printErr"] || console.warn.bind(console);
        Object.assign(Module, moduleOverrides);
        moduleOverrides = null;
        checkIncomingModuleAPI();
        if (Module["arguments"]) arguments_ = Module["arguments"];
        legacyModuleProp("arguments", "arguments_");
        if (Module["thisProgram"]) thisProgram = Module["thisProgram"];
        legacyModuleProp("thisProgram", "thisProgram");
        if (Module["quit"]) quit_ = Module["quit"];
        legacyModuleProp("quit", "quit_");
        assert(typeof Module["memoryInitializerPrefixURL"] == "undefined", "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead");
        assert(typeof Module["pthreadMainPrefixURL"] == "undefined", "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead");
        assert(typeof Module["cdInitializerPrefixURL"] == "undefined", "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead");
        assert(typeof Module["filePackagePrefixURL"] == "undefined", "Module.filePackagePrefixURL option was removed, use Module.locateFile instead");
        assert(typeof Module["read"] == "undefined", "Module.read option was removed (modify read_ in JS)");
        assert(typeof Module["readAsync"] == "undefined", "Module.readAsync option was removed (modify readAsync in JS)");
        assert(typeof Module["readBinary"] == "undefined", "Module.readBinary option was removed (modify readBinary in JS)");
        assert(typeof Module["setWindowTitle"] == "undefined", "Module.setWindowTitle option was removed (modify setWindowTitle in JS)");
        assert(typeof Module["TOTAL_MEMORY"] == "undefined", "Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY");
        legacyModuleProp("read", "read_");
        legacyModuleProp("readAsync", "readAsync");
        legacyModuleProp("readBinary", "readBinary");
        legacyModuleProp("setWindowTitle", "setWindowTitle");
        assert(!ENVIRONMENT_IS_WORKER, "worker environment detected but not enabled at build time.  Add 'worker' to `-sENVIRONMENT` to enable.");
        assert(!ENVIRONMENT_IS_NODE, "node environment detected but not enabled at build time.  Add 'node' to `-sENVIRONMENT` to enable.");
        assert(!ENVIRONMENT_IS_SHELL, "shell environment detected but not enabled at build time.  Add 'shell' to `-sENVIRONMENT` to enable.");
        var wasmBinary;
        if (Module["wasmBinary"]) wasmBinary = Module["wasmBinary"];
        legacyModuleProp("wasmBinary", "wasmBinary");
        var noExitRuntime = Module["noExitRuntime"] || true;
        legacyModuleProp("noExitRuntime", "noExitRuntime");
        if (typeof WebAssembly != "object") abort("no native wasm support detected");
        var wasmMemory;
        var ABORT = false;
        var EXITSTATUS;
        function assert(condition, text) {
            if (!condition) abort("Assertion failed" + (text ? ": " + text : ""));
        }
        var UTF8Decoder = typeof TextDecoder != "undefined" ? new TextDecoder("utf8") : undefined;
        function UTF8ArrayToString(heapOrArray, idx, maxBytesToRead) {
            var endIdx = idx + maxBytesToRead;
            var endPtr = idx;
            while(heapOrArray[endPtr] && !(endPtr >= endIdx))++endPtr;
            if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
            var str = "";
            while(idx < endPtr){
                var u0 = heapOrArray[idx++];
                if (!(u0 & 128)) {
                    str += String.fromCharCode(u0);
                    continue;
                }
                var u1 = heapOrArray[idx++] & 63;
                if ((u0 & 224) == 192) {
                    str += String.fromCharCode((u0 & 31) << 6 | u1);
                    continue;
                }
                var u2 = heapOrArray[idx++] & 63;
                if ((u0 & 240) == 224) u0 = (u0 & 15) << 12 | u1 << 6 | u2;
                else {
                    if ((u0 & 248) != 240) warnOnce("Invalid UTF-8 leading byte " + ptrToString(u0) + " encountered when deserializing a UTF-8 string in wasm memory to a JS string!");
                    u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heapOrArray[idx++] & 63;
                }
                if (u0 < 65536) str += String.fromCharCode(u0);
                else {
                    var ch = u0 - 65536;
                    str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
                }
            }
            return str;
        }
        function UTF8ToString(ptr, maxBytesToRead) {
            return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
        }
        function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
            if (!(maxBytesToWrite > 0)) return 0;
            var startIdx = outIdx;
            var endIdx = outIdx + maxBytesToWrite - 1;
            for(var i = 0; i < str.length; ++i){
                var u = str.charCodeAt(i);
                if (u >= 55296 && u <= 57343) {
                    var u1 = str.charCodeAt(++i);
                    u = 65536 + ((u & 1023) << 10) | u1 & 1023;
                }
                if (u <= 127) {
                    if (outIdx >= endIdx) break;
                    heap[outIdx++] = u;
                } else if (u <= 2047) {
                    if (outIdx + 1 >= endIdx) break;
                    heap[outIdx++] = 192 | u >> 6;
                    heap[outIdx++] = 128 | u & 63;
                } else if (u <= 65535) {
                    if (outIdx + 2 >= endIdx) break;
                    heap[outIdx++] = 224 | u >> 12;
                    heap[outIdx++] = 128 | u >> 6 & 63;
                    heap[outIdx++] = 128 | u & 63;
                } else {
                    if (outIdx + 3 >= endIdx) break;
                    if (u > 1114111) warnOnce("Invalid Unicode code point " + ptrToString(u) + " encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF).");
                    heap[outIdx++] = 240 | u >> 18;
                    heap[outIdx++] = 128 | u >> 12 & 63;
                    heap[outIdx++] = 128 | u >> 6 & 63;
                    heap[outIdx++] = 128 | u & 63;
                }
            }
            heap[outIdx] = 0;
            return outIdx - startIdx;
        }
        function stringToUTF8(str, outPtr, maxBytesToWrite) {
            assert(typeof maxBytesToWrite == "number", "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
            return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
        }
        var HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
        function updateMemoryViews() {
            var b = wasmMemory.buffer;
            Module["HEAP8"] = HEAP8 = new Int8Array(b);
            Module["HEAP16"] = HEAP16 = new Int16Array(b);
            Module["HEAP32"] = HEAP32 = new Int32Array(b);
            Module["HEAPU8"] = HEAPU8 = new Uint8Array(b);
            Module["HEAPU16"] = HEAPU16 = new Uint16Array(b);
            Module["HEAPU32"] = HEAPU32 = new Uint32Array(b);
            Module["HEAPF32"] = HEAPF32 = new Float32Array(b);
            Module["HEAPF64"] = HEAPF64 = new Float64Array(b);
        }
        assert(!Module["STACK_SIZE"], "STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time");
        assert(typeof Int32Array != "undefined" && typeof Float64Array !== "undefined" && Int32Array.prototype.subarray != undefined && Int32Array.prototype.set != undefined, "JS engine does not provide full typed array support");
        assert(!Module["wasmMemory"], "Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally");
        assert(!Module["INITIAL_MEMORY"], "Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically");
        var wasmTable;
        function writeStackCookie() {
            var max = _emscripten_stack_get_end();
            assert((max & 3) == 0);
            if (max == 0) max += 4;
            HEAPU32[max >> 2] = 34821223;
            HEAPU32[max + 4 >> 2] = 2310721022;
            HEAPU32[0] = 1668509029;
        }
        function checkStackCookie() {
            if (ABORT) return;
            var max = _emscripten_stack_get_end();
            if (max == 0) max += 4;
            var cookie1 = HEAPU32[max >> 2];
            var cookie2 = HEAPU32[max + 4 >> 2];
            if (cookie1 != 34821223 || cookie2 != 2310721022) abort("Stack overflow! Stack cookie has been overwritten at " + ptrToString(max) + ", expected hex dwords 0x89BACDFE and 0x2135467, but received " + ptrToString(cookie2) + " " + ptrToString(cookie1));
            if (HEAPU32[0] !== 1668509029) abort("Runtime error: The application has corrupted its heap memory area (address zero)!");
        }
        (function() {
            var h16 = new Int16Array(1);
            var h8 = new Int8Array(h16.buffer);
            h16[0] = 25459;
            if (h8[0] !== 115 || h8[1] !== 99) throw "Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)";
        })();
        var __ATPRERUN__ = [];
        var __ATINIT__ = [];
        var __ATPOSTRUN__ = [];
        var runtimeInitialized = false;
        function preRun() {
            if (Module["preRun"]) {
                if (typeof Module["preRun"] == "function") Module["preRun"] = [
                    Module["preRun"]
                ];
                while(Module["preRun"].length)addOnPreRun(Module["preRun"].shift());
            }
            callRuntimeCallbacks(__ATPRERUN__);
        }
        function initRuntime() {
            assert(!runtimeInitialized);
            runtimeInitialized = true;
            checkStackCookie();
            callRuntimeCallbacks(__ATINIT__);
        }
        function postRun() {
            checkStackCookie();
            if (Module["postRun"]) {
                if (typeof Module["postRun"] == "function") Module["postRun"] = [
                    Module["postRun"]
                ];
                while(Module["postRun"].length)addOnPostRun(Module["postRun"].shift());
            }
            callRuntimeCallbacks(__ATPOSTRUN__);
        }
        function addOnPreRun(cb) {
            __ATPRERUN__.unshift(cb);
        }
        function addOnInit(cb) {
            __ATINIT__.unshift(cb);
        }
        function addOnPostRun(cb) {
            __ATPOSTRUN__.unshift(cb);
        }
        assert(Math.imul, "This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
        assert(Math.fround, "This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
        assert(Math.clz32, "This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
        assert(Math.trunc, "This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
        var runDependencies = 0;
        var runDependencyWatcher = null;
        var dependenciesFulfilled = null;
        var runDependencyTracking = {};
        function addRunDependency(id) {
            runDependencies++;
            if (Module["monitorRunDependencies"]) Module["monitorRunDependencies"](runDependencies);
            if (id) {
                assert(!runDependencyTracking[id]);
                runDependencyTracking[id] = 1;
                if (runDependencyWatcher === null && typeof setInterval != "undefined") runDependencyWatcher = setInterval(function() {
                    if (ABORT) {
                        clearInterval(runDependencyWatcher);
                        runDependencyWatcher = null;
                        return;
                    }
                    var shown = false;
                    for(var dep in runDependencyTracking){
                        if (!shown) {
                            shown = true;
                            err("still waiting on run dependencies:");
                        }
                        err("dependency: " + dep);
                    }
                    if (shown) err("(end of list)");
                }, 1e4);
            } else err("warning: run dependency added without ID");
        }
        function removeRunDependency(id) {
            runDependencies--;
            if (Module["monitorRunDependencies"]) Module["monitorRunDependencies"](runDependencies);
            if (id) {
                assert(runDependencyTracking[id]);
                delete runDependencyTracking[id];
            } else err("warning: run dependency removed without ID");
            if (runDependencies == 0) {
                if (runDependencyWatcher !== null) {
                    clearInterval(runDependencyWatcher);
                    runDependencyWatcher = null;
                }
                if (dependenciesFulfilled) {
                    var callback = dependenciesFulfilled;
                    dependenciesFulfilled = null;
                    callback();
                }
            }
        }
        function abort(what) {
            if (Module["onAbort"]) Module["onAbort"](what);
            what = "Aborted(" + what + ")";
            err(what);
            ABORT = true;
            EXITSTATUS = 1;
            var e = new WebAssembly.RuntimeError(what);
            readyPromiseReject(e);
            throw e;
        }
        var FS = {
            error: function() {
                abort("Filesystem support (FS) was not included. The problem is that you are using files from JS, but files were not used from C/C++, so filesystem support was not auto-included. You can force-include filesystem support with -sFORCE_FILESYSTEM");
            },
            init: function() {
                FS.error();
            },
            createDataFile: function() {
                FS.error();
            },
            createPreloadedFile: function() {
                FS.error();
            },
            createLazyFile: function() {
                FS.error();
            },
            open: function() {
                FS.error();
            },
            mkdev: function() {
                FS.error();
            },
            registerDevice: function() {
                FS.error();
            },
            analyzePath: function() {
                FS.error();
            },
            loadFilesFromDB: function() {
                FS.error();
            },
            ErrnoError: function ErrnoError() {
                FS.error();
            }
        };
        Module["FS_createDataFile"] = FS.createDataFile;
        Module["FS_createPreloadedFile"] = FS.createPreloadedFile;
        var dataURIPrefix = "data:application/octet-stream;base64,";
        function isDataURI(filename) {
            return filename.startsWith(dataURIPrefix);
        }
        function isFileURI(filename) {
            return filename.startsWith("file://");
        }
        function createExportWrapper(name, fixedasm) {
            return function() {
                var displayName = name;
                var asm = fixedasm;
                if (!fixedasm) asm = Module["asm"];
                assert(runtimeInitialized, "native function `" + displayName + "` called before runtime initialization");
                if (!asm[name]) assert(asm[name], "exported native function `" + displayName + "` not found");
                return asm[name].apply(null, arguments);
            };
        }
        var wasmBinaryFile;
        wasmBinaryFile = "data:application/octet-stream;base64,AGFzbQEAAAABJgdgAAF/YAN/f38Bf2ABfwF/YAR/f39/AGAAAGABfwBgA39+fwF+Aw8OBAMDAQECAAUCAAAAAgAEBQFwAQEBBQcBAYAEgIACBhMDfwFBkIiACAt/AUEAC38BQQALB4ADEgZtZW1vcnkCABFfX3dhc21fY2FsbF9jdG9ycwAAE3ppZ3phZ19kZWx0YV9lbmNvZGUAARN6aWd6YWdfZGVsdGFfZGVjb2RlAAISc3RyZWFtdmJ5dGVfZW5jb2RlAAMSc3RyZWFtdmJ5dGVfZGVjb2RlAAQfc3RyZWFtdmJ5dGVfbWF4X2NvbXByZXNzZWRieXRlcwAFGV9faW5kaXJlY3RfZnVuY3Rpb25fdGFibGUBABBfX2Vycm5vX2xvY2F0aW9uAA0GZmZsdXNoAAwVZW1zY3JpcHRlbl9zdGFja19pbml0AAAZZW1zY3JpcHRlbl9zdGFja19nZXRfZnJlZQAJGWVtc2NyaXB0ZW5fc3RhY2tfZ2V0X2Jhc2UAChhlbXNjcmlwdGVuX3N0YWNrX2dldF9lbmQACwlzdGFja1NhdmUABgxzdGFja1Jlc3RvcmUABwpzdGFja0FsbG9jAAgcZW1zY3JpcHRlbl9zdGFja19nZXRfY3VycmVudAAGCo8JDg4AQZCIgAgkAkGQCCQBC+0BAgJ/AnsCQCACRQ0AIAJBBE8EQCACQXxxIQQgA/0QIQZBACEDA0AgASADQQJ0aiAAIANBAXRq/V0BACIHIAf9DQABAAECAwABBAUAAQYHAAFBEP2rAUEQ/awBIAYgB/0NBgcAARARAAESEwABFBUAAUEQ/asBQRD9rAH9sQEiBkEB/asBIAZBH/2sAf1R/QsCACAHIQYgA0EEaiIDIARHDQALIAIgBEYNASAG/RkDIQMLA0AgASAEQQJ0aiAAIARBAXRqLgEAIgUgA8FrIgNBAXQgA0EfdXM2AgAgBSEDIARBAWoiBCACRw0ACwsLrwEBBH8CQCACRQ0AIAJBAUcEQCACQX5xIQcDQCABIARBAnQiBWogAyAAIAVqKAIAIgNBAXZBACADQQFxa3NqIgM2AgAgASAFQQRyIgVqIAMgACAFaigCACIDQQF2QQAgA0EBcWtzaiIDNgIAIARBAmohBCAGQQJqIgYgB0cNAAsLIAJBAXFFDQAgASAEQQJ0IgJqIAAgAmooAgAiAEEBdkEAIABBAXFrcyADajYCAAsL5AEBCH8gAiABQQNqQQJ2aiEEIAEEQCACIQYDQCADQf8BcUEIRwR/IAMFIAYgBToAACAGQQFqIQZBACEFQQALIQkCfyAAIAhBAnRqKAIAIgNB/wFNBEAgBCADOgAAQQEhB0EADAELIANB//8DTQRAIAQgAzsAAEECIQdBAQwBCyADQf///wdNBEAgBCADOwAAIAQgA0EQdjoAAkEDIQdBAgwBCyAEIAM2AABBBCEHQQMLIQogCUECaiEDIAQgB2ohBCAFIAogCXRyIQUgCEEBaiIIIAFHDQALIAYgBToAAAsgBCACawvEAQEGfyACRQRAQQAPCyAAQQFqIQYgACACQQNqQQJ2aiEDIAAtAAAhBwNAIARB/wFxQQhGBEAgBi0AACEHIAZBAWohBkEAIQQLIAECfwJAAkACQAJAIAcgBHZBA3EOAwABAgMLQQEhBSADLQAADAMLQQIhBSADLwAADAILQQMhBSADLwAAIAMtAAJBEHRyDAELQQQhBSADKAAACzYCACAEQQJqIQQgAUEEaiEBIAMgBWohAyAIQQFqIgggAkcNAAsgAyAAawsTACAAQQJ0IABBA2pBAnZqQRBqCwQAIwALBgAgACQACxAAIwAgAGtBcHEiACQAIAALBwAjACMBawsEACMCCwQAIwEL6AEBA38gAEUEQEGICCgCAARAQYgIKAIAEAwhAQtBiAgoAgAEQEGICCgCABAMIAFyIQELQYQIKAIAIgAEQANAIAAoAkwaIAAoAhQgACgCHEcEQCAAEAwgAXIhAQsgACgCOCIADQALCyABDwsgACgCTEEATiECAkACQCAAKAIUIAAoAhxGDQAgAEEAQQAgACgCJBEBABogACgCFA0AQX8hAQwBCyAAKAIEIgEgACgCCCIDRwRAIAAgASADa6xBASAAKAIoEQYAGgtBACEBIABBADYCHCAAQgA3AxAgAEIANwIEIAJFDQALIAELBQBBjAgL";
        if (!isDataURI(wasmBinaryFile)) wasmBinaryFile = locateFile(wasmBinaryFile);
        function getBinary(file) {
            try {
                if (file == wasmBinaryFile && wasmBinary) return new Uint8Array(wasmBinary);
                var binary = tryParseAsDataURI(file);
                if (binary) return binary;
                if (readBinary) return readBinary(file);
                throw "both async and sync fetching of the wasm failed";
            } catch (err) {
                abort(err);
            }
        }
        function getBinaryPromise() {
            if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
                if (typeof fetch == "function") return fetch(wasmBinaryFile, {
                    credentials: "same-origin"
                }).then(function(response) {
                    if (!response["ok"]) throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
                    return response["arrayBuffer"]();
                }).catch(function() {
                    return getBinary(wasmBinaryFile);
                });
            }
            return Promise.resolve().then(function() {
                return getBinary(wasmBinaryFile);
            });
        }
        function createWasm() {
            var info = {
                "env": wasmImports,
                "wasi_snapshot_preview1": wasmImports
            };
            function receiveInstance(instance, module) {
                var exports = instance.exports;
                Module["asm"] = exports;
                wasmMemory = Module["asm"]["memory"];
                assert(wasmMemory, "memory not found in wasm exports");
                updateMemoryViews();
                wasmTable = Module["asm"]["__indirect_function_table"];
                assert(wasmTable, "table not found in wasm exports");
                addOnInit(Module["asm"]["__wasm_call_ctors"]);
                removeRunDependency("wasm-instantiate");
            }
            addRunDependency("wasm-instantiate");
            var trueModule = Module;
            function receiveInstantiationResult(result) {
                assert(Module === trueModule, "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?");
                trueModule = null;
                receiveInstance(result["instance"]);
            }
            function instantiateArrayBuffer(receiver) {
                return getBinaryPromise().then(function(binary) {
                    return WebAssembly.instantiate(binary, info);
                }).then(function(instance) {
                    return instance;
                }).then(receiver, function(reason) {
                    err("failed to asynchronously prepare wasm: " + reason);
                    if (isFileURI(wasmBinaryFile)) err("warning: Loading from a file URI (" + wasmBinaryFile + ") is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing");
                    abort(reason);
                });
            }
            function instantiateAsync() {
                if (!wasmBinary && typeof WebAssembly.instantiateStreaming == "function" && !isDataURI(wasmBinaryFile) && typeof fetch == "function") return fetch(wasmBinaryFile, {
                    credentials: "same-origin"
                }).then(function(response) {
                    var result = WebAssembly.instantiateStreaming(response, info);
                    return result.then(receiveInstantiationResult, function(reason) {
                        err("wasm streaming compile failed: " + reason);
                        err("falling back to ArrayBuffer instantiation");
                        return instantiateArrayBuffer(receiveInstantiationResult);
                    });
                });
                else return instantiateArrayBuffer(receiveInstantiationResult);
            }
            if (Module["instantiateWasm"]) try {
                var exports = Module["instantiateWasm"](info, receiveInstance);
                return exports;
            } catch (e) {
                err("Module.instantiateWasm callback failed with error: " + e);
                readyPromiseReject(e);
            }
            instantiateAsync().catch(readyPromiseReject);
            return {};
        }
        var tempDouble;
        var tempI64;
        function legacyModuleProp(prop, newName) {
            if (!Object.getOwnPropertyDescriptor(Module, prop)) Object.defineProperty(Module, prop, {
                configurable: true,
                get: function() {
                    abort("Module." + prop + " has been replaced with plain " + newName + " (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
                }
            });
        }
        function ignoredModuleProp(prop) {
            if (Object.getOwnPropertyDescriptor(Module, prop)) abort("`Module." + prop + "` was supplied but `" + prop + "` not included in INCOMING_MODULE_JS_API");
        }
        function isExportedByForceFilesystem(name) {
            return name === "FS_createPath" || name === "FS_createDataFile" || name === "FS_createPreloadedFile" || name === "FS_unlink" || name === "addRunDependency" || name === "FS_createLazyFile" || name === "FS_createDevice" || name === "removeRunDependency";
        }
        function missingGlobal(sym, msg) {
            if (typeof globalThis !== "undefined") Object.defineProperty(globalThis, sym, {
                configurable: true,
                get: function() {
                    warnOnce("`" + sym + "` is not longer defined by emscripten. " + msg);
                    return undefined;
                }
            });
        }
        missingGlobal("buffer", "Please use HEAP8.buffer or wasmMemory.buffer");
        function missingLibrarySymbol(sym) {
            if (typeof globalThis !== "undefined" && !Object.getOwnPropertyDescriptor(globalThis, sym)) Object.defineProperty(globalThis, sym, {
                configurable: true,
                get: function() {
                    var msg = "`" + sym + "` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line";
                    var librarySymbol = sym;
                    if (!librarySymbol.startsWith("_")) librarySymbol = "$" + sym;
                    msg += " (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE=" + librarySymbol + ")";
                    if (isExportedByForceFilesystem(sym)) msg += ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you";
                    warnOnce(msg);
                    return undefined;
                }
            });
            unexportedRuntimeSymbol(sym);
        }
        function unexportedRuntimeSymbol(sym) {
            if (!Object.getOwnPropertyDescriptor(Module, sym)) Object.defineProperty(Module, sym, {
                configurable: true,
                get: function() {
                    var msg = "'" + sym + "' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)";
                    if (isExportedByForceFilesystem(sym)) msg += ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you";
                    abort(msg);
                }
            });
        }
        function ExitStatus(status) {
            this.name = "ExitStatus";
            this.message = "Program terminated with exit(" + status + ")";
            this.status = status;
        }
        function callRuntimeCallbacks(callbacks) {
            while(callbacks.length > 0)callbacks.shift()(Module);
        }
        function intArrayToString(array) {
            var ret = [];
            for(var i = 0; i < array.length; i++){
                var chr = array[i];
                if (chr > 255) {
                    assert(false, "Character code " + chr + " (" + String.fromCharCode(chr) + ")  at offset " + i + " not in 0x00-0xFF.");
                    chr &= 255;
                }
                ret.push(String.fromCharCode(chr));
            }
            return ret.join("");
        }
        function ptrToString(ptr) {
            assert(typeof ptr === "number");
            return "0x" + ptr.toString(16).padStart(8, "0");
        }
        function warnOnce(text) {
            if (!warnOnce.shown) warnOnce.shown = {};
            if (!warnOnce.shown[text]) {
                warnOnce.shown[text] = 1;
                err(text);
            }
        }
        function getCFunc(ident) {
            var func = Module["_" + ident];
            assert(func, "Cannot call unknown function " + ident + ", make sure it is exported");
            return func;
        }
        function writeArrayToMemory(array, buffer) {
            assert(array.length >= 0, "writeArrayToMemory array must have a length (should be an array or typed array)");
            HEAP8.set(array, buffer);
        }
        function ccall(ident, returnType, argTypes, args, opts) {
            var toC = {
                "string": (str)=>{
                    var ret = 0;
                    if (str !== null && str !== undefined && str !== 0) {
                        var len = (str.length << 2) + 1;
                        ret = stackAlloc(len);
                        stringToUTF8(str, ret, len);
                    }
                    return ret;
                },
                "array": (arr)=>{
                    var ret = stackAlloc(arr.length);
                    writeArrayToMemory(arr, ret);
                    return ret;
                }
            };
            function convertReturnValue(ret) {
                if (returnType === "string") return UTF8ToString(ret);
                if (returnType === "boolean") return Boolean(ret);
                return ret;
            }
            var func = getCFunc(ident);
            var cArgs = [];
            var stack = 0;
            assert(returnType !== "array", 'Return type should not be "array".');
            if (args) for(var i = 0; i < args.length; i++){
                var converter = toC[argTypes[i]];
                if (converter) {
                    if (stack === 0) stack = stackSave();
                    cArgs[i] = converter(args[i]);
                } else cArgs[i] = args[i];
            }
            var ret = func.apply(null, cArgs);
            function onDone(ret) {
                if (stack !== 0) stackRestore(stack);
                return convertReturnValue(ret);
            }
            ret = onDone(ret);
            return ret;
        }
        function cwrap(ident, returnType, argTypes, opts) {
            return function() {
                return ccall(ident, returnType, argTypes, arguments, opts);
            };
        }
        var decodeBase64 = typeof atob == "function" ? atob : function(input) {
            var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            var output = "";
            var chr1, chr2, chr3;
            var enc1, enc2, enc3, enc4;
            var i = 0;
            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
            do {
                enc1 = keyStr.indexOf(input.charAt(i++));
                enc2 = keyStr.indexOf(input.charAt(i++));
                enc3 = keyStr.indexOf(input.charAt(i++));
                enc4 = keyStr.indexOf(input.charAt(i++));
                chr1 = enc1 << 2 | enc2 >> 4;
                chr2 = (enc2 & 15) << 4 | enc3 >> 2;
                chr3 = (enc3 & 3) << 6 | enc4;
                output = output + String.fromCharCode(chr1);
                if (enc3 !== 64) output = output + String.fromCharCode(chr2);
                if (enc4 !== 64) output = output + String.fromCharCode(chr3);
            }while (i < input.length);
            return output;
        };
        function intArrayFromBase64(s) {
            try {
                var decoded = decodeBase64(s);
                var bytes = new Uint8Array(decoded.length);
                for(var i = 0; i < decoded.length; ++i)bytes[i] = decoded.charCodeAt(i);
                return bytes;
            } catch (_) {
                throw new Error("Converting base64 string to bytes failed.");
            }
        }
        function tryParseAsDataURI(filename) {
            if (!isDataURI(filename)) return;
            return intArrayFromBase64(filename.slice(dataURIPrefix.length));
        }
        function checkIncomingModuleAPI() {
            ignoredModuleProp("fetchSettings");
        }
        var wasmImports = {};
        var asm = createWasm();
        var ___wasm_call_ctors = createExportWrapper("__wasm_call_ctors");
        var _zigzag_delta_encode = Module["_zigzag_delta_encode"] = createExportWrapper("zigzag_delta_encode");
        var _zigzag_delta_decode = Module["_zigzag_delta_decode"] = createExportWrapper("zigzag_delta_decode");
        var _streamvbyte_encode = Module["_streamvbyte_encode"] = createExportWrapper("streamvbyte_encode");
        var _streamvbyte_decode = Module["_streamvbyte_decode"] = createExportWrapper("streamvbyte_decode");
        var _streamvbyte_max_compressedbytes = Module["_streamvbyte_max_compressedbytes"] = createExportWrapper("streamvbyte_max_compressedbytes");
        var ___errno_location = createExportWrapper("__errno_location");
        var _fflush = Module["_fflush"] = createExportWrapper("fflush");
        var _emscripten_stack_init = function() {
            return (_emscripten_stack_init = Module["asm"]["emscripten_stack_init"]).apply(null, arguments);
        };
        var _emscripten_stack_get_free = function() {
            return (_emscripten_stack_get_free = Module["asm"]["emscripten_stack_get_free"]).apply(null, arguments);
        };
        var _emscripten_stack_get_base = function() {
            return (_emscripten_stack_get_base = Module["asm"]["emscripten_stack_get_base"]).apply(null, arguments);
        };
        var _emscripten_stack_get_end = function() {
            return (_emscripten_stack_get_end = Module["asm"]["emscripten_stack_get_end"]).apply(null, arguments);
        };
        var stackSave = createExportWrapper("stackSave");
        var stackRestore = createExportWrapper("stackRestore");
        var stackAlloc = createExportWrapper("stackAlloc");
        var _emscripten_stack_get_current = function() {
            return (_emscripten_stack_get_current = Module["asm"]["emscripten_stack_get_current"]).apply(null, arguments);
        };
        Module["stackAlloc"] = stackAlloc;
        Module["stackSave"] = stackSave;
        Module["stackRestore"] = stackRestore;
        Module["cwrap"] = cwrap;
        Module["writeArrayToMemory"] = writeArrayToMemory;
        var missingLibrarySymbols = [
            "zeroMemory",
            "stringToNewUTF8",
            "exitJS",
            "getHeapMax",
            "emscripten_realloc_buffer",
            "setErrNo",
            "inetPton4",
            "inetNtop4",
            "inetPton6",
            "inetNtop6",
            "readSockaddr",
            "writeSockaddr",
            "getHostByName",
            "getRandomDevice",
            "traverseStack",
            "convertPCtoSourceLocation",
            "readEmAsmArgs",
            "jstoi_q",
            "jstoi_s",
            "getExecutableName",
            "listenOnce",
            "autoResumeAudioContext",
            "dynCallLegacy",
            "getDynCaller",
            "dynCall",
            "handleException",
            "runtimeKeepalivePush",
            "runtimeKeepalivePop",
            "callUserCallback",
            "maybeExit",
            "safeSetTimeout",
            "asmjsMangle",
            "asyncLoad",
            "alignMemory",
            "mmapAlloc",
            "handleAllocator",
            "getNativeTypeSize",
            "STACK_SIZE",
            "STACK_ALIGN",
            "POINTER_SIZE",
            "ASSERTIONS",
            "writeI53ToI64",
            "writeI53ToI64Clamped",
            "writeI53ToI64Signaling",
            "writeI53ToU64Clamped",
            "writeI53ToU64Signaling",
            "readI53FromI64",
            "readI53FromU64",
            "convertI32PairToI53",
            "convertI32PairToI53Checked",
            "convertU32PairToI53",
            "uleb128Encode",
            "sigToWasmTypes",
            "generateFuncType",
            "convertJsFunctionToWasm",
            "getEmptyTableSlot",
            "updateTableMap",
            "getFunctionAddress",
            "addFunction",
            "removeFunction",
            "reallyNegative",
            "unSign",
            "strLen",
            "reSign",
            "formatString",
            "intArrayFromString",
            "AsciiToString",
            "stringToAscii",
            "UTF16ToString",
            "stringToUTF16",
            "lengthBytesUTF16",
            "UTF32ToString",
            "stringToUTF32",
            "lengthBytesUTF32",
            "allocateUTF8",
            "allocateUTF8OnStack",
            "writeStringToMemory",
            "writeAsciiToMemory",
            "getSocketFromFD",
            "getSocketAddress",
            "registerKeyEventCallback",
            "maybeCStringToJsString",
            "findEventTarget",
            "findCanvasEventTarget",
            "getBoundingClientRect",
            "fillMouseEventData",
            "registerMouseEventCallback",
            "registerWheelEventCallback",
            "registerUiEventCallback",
            "registerFocusEventCallback",
            "fillDeviceOrientationEventData",
            "registerDeviceOrientationEventCallback",
            "fillDeviceMotionEventData",
            "registerDeviceMotionEventCallback",
            "screenOrientation",
            "fillOrientationChangeEventData",
            "registerOrientationChangeEventCallback",
            "fillFullscreenChangeEventData",
            "registerFullscreenChangeEventCallback",
            "JSEvents_requestFullscreen",
            "JSEvents_resizeCanvasForFullscreen",
            "registerRestoreOldStyle",
            "hideEverythingExceptGivenElement",
            "restoreHiddenElements",
            "setLetterbox",
            "softFullscreenResizeWebGLRenderTarget",
            "doRequestFullscreen",
            "fillPointerlockChangeEventData",
            "registerPointerlockChangeEventCallback",
            "registerPointerlockErrorEventCallback",
            "requestPointerLock",
            "fillVisibilityChangeEventData",
            "registerVisibilityChangeEventCallback",
            "registerTouchEventCallback",
            "fillGamepadEventData",
            "registerGamepadEventCallback",
            "registerBeforeUnloadEventCallback",
            "fillBatteryEventData",
            "battery",
            "registerBatteryEventCallback",
            "setCanvasElementSize",
            "getCanvasElementSize",
            "demangle",
            "demangleAll",
            "jsStackTrace",
            "stackTrace",
            "getEnvStrings",
            "checkWasiClock",
            "flush_NO_FILESYSTEM",
            "createDyncallWrapper",
            "setImmediateWrapped",
            "clearImmediateWrapped",
            "polyfillSetImmediate",
            "newNativePromise",
            "getPromise",
            "ExceptionInfo",
            "exception_addRef",
            "exception_decRef",
            "setMainLoop",
            "_setNetworkCallback",
            "heapObjectForWebGLType",
            "heapAccessShiftForWebGLHeap",
            "emscriptenWebGLGet",
            "computeUnpackAlignedImageSize",
            "emscriptenWebGLGetTexPixelData",
            "emscriptenWebGLGetUniform",
            "webglGetUniformLocation",
            "webglPrepareUniformLocationsBeforeFirstUse",
            "webglGetLeftBracePos",
            "emscriptenWebGLGetVertexAttrib",
            "writeGLArray",
            "SDL_unicode",
            "SDL_ttfContext",
            "SDL_audio",
            "GLFW_Window",
            "runAndAbortIfError",
            "ALLOC_NORMAL",
            "ALLOC_STACK",
            "allocate"
        ];
        missingLibrarySymbols.forEach(missingLibrarySymbol);
        var unexportedSymbols = [
            "run",
            "UTF8ArrayToString",
            "UTF8ToString",
            "stringToUTF8Array",
            "stringToUTF8",
            "lengthBytesUTF8",
            "addOnPreRun",
            "addOnInit",
            "addOnPreMain",
            "addOnExit",
            "addOnPostRun",
            "addRunDependency",
            "removeRunDependency",
            "FS_createFolder",
            "FS_createPath",
            "FS_createDataFile",
            "FS_createPreloadedFile",
            "FS_createLazyFile",
            "FS_createLink",
            "FS_createDevice",
            "FS_unlink",
            "out",
            "err",
            "callMain",
            "abort",
            "keepRuntimeAlive",
            "wasmMemory",
            "getTempRet0",
            "setTempRet0",
            "writeStackCookie",
            "checkStackCookie",
            "intArrayFromBase64",
            "tryParseAsDataURI",
            "ptrToString",
            "ENV",
            "ERRNO_CODES",
            "ERRNO_MESSAGES",
            "DNS",
            "Protocols",
            "Sockets",
            "timers",
            "warnOnce",
            "UNWIND_CACHE",
            "readEmAsmArgsArray",
            "getCFunc",
            "ccall",
            "freeTableIndexes",
            "functionsInTableMap",
            "setValue",
            "getValue",
            "PATH",
            "PATH_FS",
            "intArrayToString",
            "UTF16Decoder",
            "SYSCALLS",
            "JSEvents",
            "specialHTMLTargets",
            "currentFullscreenStrategy",
            "restoreOldWindowedStyle",
            "ExitStatus",
            "dlopenMissingError",
            "promiseMap",
            "uncaughtExceptionCount",
            "exceptionLast",
            "exceptionCaught",
            "Browser",
            "wget",
            "FS",
            "MEMFS",
            "TTY",
            "PIPEFS",
            "SOCKFS",
            "tempFixedLengthArray",
            "miniTempWebGLFloatBuffers",
            "GL",
            "AL",
            "SDL",
            "SDL_gfx",
            "GLUT",
            "EGL",
            "GLFW",
            "GLEW",
            "IDBStore"
        ];
        unexportedSymbols.forEach(unexportedRuntimeSymbol);
        var calledRun;
        dependenciesFulfilled = function runCaller() {
            if (!calledRun) run();
            if (!calledRun) dependenciesFulfilled = runCaller;
        };
        function stackCheckInit() {
            _emscripten_stack_init();
            writeStackCookie();
        }
        function run() {
            if (runDependencies > 0) return;
            stackCheckInit();
            preRun();
            if (runDependencies > 0) return;
            function doRun() {
                if (calledRun) return;
                calledRun = true;
                Module["calledRun"] = true;
                if (ABORT) return;
                initRuntime();
                readyPromiseResolve(Module);
                if (Module["onRuntimeInitialized"]) Module["onRuntimeInitialized"]();
                assert(!Module["_main"], 'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]');
                postRun();
            }
            if (Module["setStatus"]) {
                Module["setStatus"]("Running...");
                setTimeout(function() {
                    setTimeout(function() {
                        Module["setStatus"]("");
                    }, 1);
                    doRun();
                }, 1);
            } else doRun();
            checkStackCookie();
        }
        if (Module["preInit"]) {
            if (typeof Module["preInit"] == "function") Module["preInit"] = [
                Module["preInit"]
            ];
            while(Module["preInit"].length > 0)Module["preInit"].pop()();
        }
        run();
        return Module.ready;
    };
})();
var $50ed3c96df748c7a$export$2e2bcd8739ae039 = $50ed3c96df748c7a$var$Module;

});


$parcel$export(module.exports, "decompress", () => $62e29a93df9de7eb$export$678d868aab8fb3c7);
$parcel$export(module.exports, "vbz", () => $8b06983e393eef12$export$612534c750e55a8b);

// import { simd } from "wasm-feature-detect";
let $8b06983e393eef12$var$streamvbyte;
let $8b06983e393eef12$var$Module;
let $8b06983e393eef12$var$zigzag_delta_encode = null;
let $8b06983e393eef12$var$zigzag_delta_decode = null;
let $8b06983e393eef12$var$streamvbyte_encode = null;
let $8b06983e393eef12$var$streamvbyte_decode = null;
let $8b06983e393eef12$var$stackSave = null;
let $8b06983e393eef12$var$stackRestore = null;
let $8b06983e393eef12$var$stackAlloc = null;
let $8b06983e393eef12$var$writeArrayToMemory = null;
let $8b06983e393eef12$var$wasmMemory = null;
let $8b06983e393eef12$var$streamvbyte_max_compressedbytes = null;

(async ()=>{
    // const simdSupported = await simd();
    // if (simdSupported) {
    $8b06983e393eef12$var$streamvbyte = (parcelRequire("210k2"));
    // } else {
    //   streamvbyte = require("./dist/streamvbyte-no-simd.mjs");
    // }
    $8b06983e393eef12$var$Module = $8b06983e393eef12$var$streamvbyte.default();
    $8b06983e393eef12$var$Module.then((mod)=>{
        $8b06983e393eef12$var$wasmMemory = mod.asm.memory;
        $8b06983e393eef12$var$stackSave = mod.stackSave;
        $8b06983e393eef12$var$stackRestore = mod.stackRestore;
        $8b06983e393eef12$var$stackAlloc = mod.stackAlloc;
        $8b06983e393eef12$var$writeArrayToMemory = mod.writeArrayToMemory;
        $8b06983e393eef12$var$zigzag_delta_encode = mod.cwrap("zigzag_delta_encode", null, [
            "number",
            "number",
            "number",
            "number"
        ]);
        $8b06983e393eef12$var$zigzag_delta_decode = mod.cwrap("zigzag_delta_decode", null, [
            "number",
            "number",
            "number",
            "number"
        ]);
        $8b06983e393eef12$var$streamvbyte_encode = mod.cwrap("streamvbyte_encode", "number", [
            "number",
            "number",
            "number"
        ]);
        $8b06983e393eef12$var$streamvbyte_decode = mod.cwrap("streamvbyte_decode", "number", [
            "number",
            "number",
            "number"
        ]);
        $8b06983e393eef12$var$streamvbyte_max_compressedbytes = mod.cwrap("streamvbyte_max_compressedbytes", "number", [
            "number"
        ]);
    });
})();
class $8b06983e393eef12$var$VbzOptions {
    constructor(perform_delta_zig_zag, integer_size, zstd_compression_level, vbz_version, zstd){
        this.perform_delta_zig_zag = perform_delta_zig_zag;
        this.integer_size = integer_size;
        this.zstd_compression_level = zstd_compression_level;
        this.vbz_version = vbz_version;
        this.zstd = zstd;
        if (this.zstd_compression_level != 0 && !this.zstd) throw new Error("js_vbz zstd compression requires a zstd reference");
        if (this.vbz_version != 0) throw new Error("js_vbz only supports v0 vbz");
        if (this.integer_size != 0 && this.integer_size != 2) throw new Error("js_vbz int compression is only for 2 byte integers");
        if (this.perform_delta_zig_zag && this.integer_size != 2) throw new Error("js_vbz delta zig zag is only for 2 byte integers");
    }
}
// Compress an Int??Array.
function $8b06983e393eef12$var$compress(to_compress, options = {}) {
    const stack_top = $8b06983e393eef12$var$stackSave();
    try {
        let compressed_out = null;
        if (options.integer_size != 0) {
            if (to_compress.byteLength % options.integer_size != 0) throw new Error(`expected a data view with no remainder for delta zig zag compression ${to_compress.byteLength}/${options.integer_size}`);
            const to_encode_size = to_compress.length * 4; // encode expects a 32 bit input number
            const to_encode_buffer_ptr = $8b06983e393eef12$var$stackAlloc(to_encode_size);
            if (options.perform_delta_zig_zag) {
                const in_size = to_compress.byteLength;
                let in_buffer_ptr = $8b06983e393eef12$var$stackAlloc(in_size);
                $8b06983e393eef12$var$writeArrayToMemory(new Int8Array(to_compress.buffer), in_buffer_ptr);
                $8b06983e393eef12$var$zigzag_delta_encode(in_buffer_ptr, to_encode_buffer_ptr, to_compress.length, 0);
            } else {
                assert(false); // need to actualy upcast to 32 bit ints here...
                throw "Didn't write this yet";
            //writeArrayToMemory(new Int8Array(to_compress.buffer), to_encode_buffer_ptr);
            }
            const out_buffer_capacity = to_compress.length * 6; // total guess.
            const out_buffer_ptr = $8b06983e393eef12$var$stackAlloc(out_buffer_capacity);
            const out_buffer_size = $8b06983e393eef12$var$streamvbyte_encode(to_encode_buffer_ptr, to_compress.length, out_buffer_ptr);
            compressed_out = new Int8Array($8b06983e393eef12$var$wasmMemory.buffer, out_buffer_ptr, out_buffer_size);
        }
        if (options.zstd_compression_level == 0) {
            let output_copy = new Int8Array(compressed_out.length);
            output_copy.set(compressed_out);
            return output_copy;
        }
        var zstd_simple = new options.zstd.Simple();
        return zstd_simple.compress(compressed_out);
    } finally{
        $8b06983e393eef12$var$stackRestore(stack_top);
    }
}
function $8b06983e393eef12$var$compress_with_size(to_compress, options = {}) {
    const compressed = $8b06983e393eef12$var$compress(to_compress, options);
    let buffer = new ArrayBuffer(compressed.length + 4);
    let data_section = new Int8Array(buffer, 4, compressed.length);
    let header_section = new Int32Array(buffer, 0, 1);
    header_section[0] = to_compress.length;
    data_section.set(compressed);
    return new Int8Array(buffer);
}
function $8b06983e393eef12$var$decompress(to_decompress, out_size, options = {}) {
    const stack_top = $8b06983e393eef12$var$stackSave();
    try {
        let decompressed_out = to_decompress;
        if (options.zstd_compression_level != 0) {
            var zstd_simple = new options.zstd.Simple();
            decompressed_out = zstd_simple.decompress(decompressed_out);
        }
        if (options.integer_size != 0) {
            const in_size = decompressed_out.byteLength;
            let encoded_buffer_ptr = $8b06983e393eef12$var$stackAlloc(in_size);
            $8b06983e393eef12$var$writeArrayToMemory(new Int8Array(decompressed_out), encoded_buffer_ptr);
            const decoded_size = $8b06983e393eef12$var$streamvbyte_max_compressedbytes(out_size);
            const decoded_buffer_ptr = $8b06983e393eef12$var$stackAlloc(decoded_size);
            console.log("in_size", in_size);
            console.log("out_size", out_size);
            console.log("encoded_buffer_ptr", encoded_buffer_ptr);
            console.log("decoded_buffer_ptr", decoded_buffer_ptr);
            const out_buffer_size = $8b06983e393eef12$var$streamvbyte_decode(encoded_buffer_ptr, decoded_buffer_ptr, out_size);
            if (options.perform_delta_zig_zag) {
                const decompressed_buffer_size = out_size * options.integer_size;
                let decompressed_buffer_ptr = $8b06983e393eef12$var$stackAlloc(decompressed_buffer_size);
                $8b06983e393eef12$var$zigzag_delta_decode(decoded_buffer_ptr, decompressed_buffer_ptr, out_size, 0);
                let decompressed_buffer_cast = new Int32Array($8b06983e393eef12$var$wasmMemory.buffer, decompressed_buffer_ptr, out_size);
                decompressed_out = new Int16Array(decompressed_buffer_cast);
            } else {
                assert(false); // need to actualy cast to 16 bit ints here...
                throw "Didn't write this yet";
            //writeArrayToMemory(new Int8Array(to_compress.buffer), to_encode_buffer_ptr);
            }
        }
        return decompressed_out;
    } finally{
        $8b06983e393eef12$var$stackRestore(stack_top);
    }
}
function $8b06983e393eef12$var$decompress_with_size(to_decompress, options = {}) {
    let data_section = new Int8Array(to_decompress, 4, to_decompress.byteLength - 4);
    let header_section = new Int32Array(to_decompress, 0, 1);
    let outSizeBits = header_section[0];
    return $8b06983e393eef12$var$decompress(data_section, outSizeBits / 2, options);
}
function $8b06983e393eef12$var$streamvbyte_max_compressedbytes1(out_size) {
    return $8b06983e393eef12$var$streamvbyte_max_compressedbytes(out_size);
}
const $8b06983e393eef12$export$612534c750e55a8b = {
    compress: $8b06983e393eef12$var$compress,
    compress_with_size: $8b06983e393eef12$var$compress_with_size,
    decompress: $8b06983e393eef12$var$decompress,
    decompress_with_size: $8b06983e393eef12$var$decompress_with_size,
    streamvbyte_max_compressedbytes: $8b06983e393eef12$var$streamvbyte_max_compressedbytes1,
    VbzOptions: $8b06983e393eef12$var$VbzOptions
};


let $62e29a93df9de7eb$var$ZSTD = null;
(0, $pCMe3$zstdcodec.ZstdCodec).run((zstd)=>$62e29a93df9de7eb$var$ZSTD = zstd);
const $62e29a93df9de7eb$export$678d868aab8fb3c7 = (d, options = null)=>{
    const decompressed = $62e29a93df9de7eb$var$decompressWithZSTD(d, options);
    const myVal = decompressed.buffer;
    return myVal;
};
const $62e29a93df9de7eb$var$decompressWithZSTD = (d, options)=>{
    options.zstd = $62e29a93df9de7eb$var$ZSTD;
    const decomp = (0, $8b06983e393eef12$export$612534c750e55a8b).decompress_with_size(d, options);
    return decomp;
};
const $62e29a93df9de7eb$var$compress = (d, options)=>{
    options.zstd = $62e29a93df9de7eb$var$ZSTD;
    const comp = (0, $8b06983e393eef12$export$612534c750e55a8b).compress_with_size(d, options);
    return comp;
};
if (typeof window === "object") {
    (0, $pCMe3$zstdcodec.ZstdCodec).run((zstd)=>window.zstd = zstd);
    window.vbzjs = {
        vbz: $8b06983e393eef12$export$612534c750e55a8b,
        decompress: $62e29a93df9de7eb$export$678d868aab8fb3c7,
        compress: $62e29a93df9de7eb$var$compress
    };
}


//# sourceMappingURL=bundle.js.map
