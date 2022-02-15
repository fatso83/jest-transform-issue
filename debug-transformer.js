// use this for output: DEBUG="jest-debug*" npx jest
const debug = require("debug")("jest-debug-transformer");
const path = require("path");
const babelJest = require("babel-jest").default;

debugger;
const originalProcess = babelJest.process;
const originalProcessAsync = babelJest.processAsync;

const myExports = {
  ...babelJest,
  process(src, filename, options) {
    throw new Error("hei");
    const basename = path.basename(filename);
    debugger;
    console.log("ahoi!", filename);
    debug(`Transforming '${filename}'. path.basename => ${basename}`);
    return originalProcess(src, filename, options);
  },
  processAsync(src, filename, options) {
    const basename = path.basename(filename);
    debug(`Async Transforming '${filename}'. path.basename => ${basename}`);
    return originalProcessAsync(src, filename, options);
  },
};

Object.assign(module.exports, myExports);
