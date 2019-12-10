/**
 *  Rollup.js Config
 */

import compiler from "@ampproject/rollup-plugin-closure-compiler";

module.exports = {
  input: "./src/SweetConfirm.js",
  output: {
    file: "./sweetconfirm.min.js",
    format: "iife",
    name: "SweetConfirm"
  },
  plugins: [
    compiler({
      compilation_level: "SIMPLE"
    })
  ]
};
