"use strict";

require("@virtualpatterns/mablung-source-map-support/install");

var _pug = _interopRequireDefault(require("pug"));

var _htmlToVdom = _interopRequireDefault(require("html-to-vdom"));

var _vnode = _interopRequireDefault(require("virtual-dom/vnode/vnode.js"));

var _vtext = _interopRequireDefault(require("virtual-dom/vnode/vtext.js"));

var _index = require("../index.cjs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Convert = (0, _htmlToVdom.default)({
  'VNode': _vnode.default,
  'VText': _vtext.default
});
const Require = require;

async function main() {
  try {
    let path = Require.resolve('./digger.pug');
    let pugHTML = null;
    pugHTML = _pug.default.compileFile(path)();
    let pugNode = Convert(pugHTML);
    console.log('-'.repeat(80));
    console.log('pugNode');
    console.log('-'.repeat(80));
    console.dir(pugNode, {
      'depth': null
    });
    let myNode = (await _index.Transform.getFunctionFromPath(path))();
    console.log('-'.repeat(80));
    console.log('myNode');
    console.log('-'.repeat(80));
    console.dir(myNode, {
      'depth': null
    });
  } catch (error) {
    console.log('-'.repeat(80));
    console.error(error);
    console.log('-'.repeat(80));
  }
}

main();
//# sourceMappingURL=digger.cjs.map