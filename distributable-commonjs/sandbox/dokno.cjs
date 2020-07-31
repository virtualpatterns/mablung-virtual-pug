"use strict";

require("@virtualpatterns/mablung-source-map-support/install.js");

var _createElement = _interopRequireDefault(require("virtual-dom/create-element.js"));

var _pretty = _interopRequireDefault(require("pretty"));

var _transform = require("../library/transform.cjs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Require = require;

async function main() {
  try {
    let path = Require.resolve('../../source/sandbox/dokno.pug');
    let module = null;
    module = await _transform.Transform.createModuleFromPath(path);
    module = module.default || module;
    let virtualNode = module(); // console.log('-'.repeat(80))
    // console.log('virtualNode')
    // console.log('-'.repeat(80))
    // console.dir(virtualNode, { 'depth': null })

    let realNode = virtualNode.map(virtualNode => (0, _createElement.default)(virtualNode));
    console.log('-'.repeat(80));
    console.log('CreateRealNode(virtualNode)');
    console.log('-'.repeat(80));
    realNode.forEach(realNode => console.log((0, _pretty.default)(realNode.toString())));
    console.log('-'.repeat(80));
  } catch (error) {
    console.log('-'.repeat(80));
    console.error(error);
    console.log('-'.repeat(80));
  }
}

main();
//# sourceMappingURL=dokno.cjs.map