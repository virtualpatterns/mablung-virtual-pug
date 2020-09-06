"use strict";

var _index = require("../index.cjs");

const Require = require;

async function main() {
  try {
    let path = Require.resolve('../test/library/resource/transform/attribute/12-class-literal-classname.pug');
    let virtualFn = await _index.Transform.getFunctionFromPath(path);
    console.log(typeof virtualFn);
  } catch (error) {
    console.log('-'.repeat(80));
    console.error(error);
    console.log('-'.repeat(80));
  }
}

main();
//# sourceMappingURL=fn.cjs.map