"use strict";

require("@virtualpatterns/mablung-source-map-support/install.js");

var _pretty = _interopRequireDefault(require("pretty"));

var _createElement = _interopRequireDefault(require("virtual-dom/create-element.js"));

var _diff = _interopRequireDefault(require("virtual-dom/diff.js"));

var _patch = _interopRequireDefault(require("virtual-dom/patch.js"));

var _transform = require("../library/transform.cjs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Require = require;

async function main() {
  try {
    let path = Require.resolve('./dopey.pug');
    let virtualFn = await _transform.Transform.getFunctionFromPath(path);
    let currentVirtualNode = virtualFn({
      'name': 'Frank'
    })[0];
    let nextVirtualNode = virtualFn({
      'name': 'Jeff'
    })[0];
    let realNode = (0, _createElement.default)(currentVirtualNode);
    console.log('-'.repeat(80));
    console.log((0, _pretty.default)(realNode.toString()));
    let diff = (0, _diff.default)(currentVirtualNode, nextVirtualNode);
    console.log('-'.repeat(80));
    console.dir(diff, {
      'depth': null
    });
    (0, _patch.default)(realNode, diff);
    console.log('-'.repeat(80));
    console.log((0, _pretty.default)(realNode.toString()));
  } catch (error) {
    console.log('-'.repeat(80));
    console.error(error);
    console.log('-'.repeat(80));
  }
}

main();
//# sourceMappingURL=dopey.cjs.map