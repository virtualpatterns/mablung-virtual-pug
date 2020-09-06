"use strict";

var _createElement = _interopRequireDefault(require("virtual-dom/create-element.js"));

var _h = _interopRequireDefault(require("virtual-dom/h.js"));

var _pretty = _interopRequireDefault(require("pretty"));

var _prettier = _interopRequireDefault(require("prettier"));

var _htmlToVdom = _interopRequireDefault(require("html-to-vdom"));

var _vnode = _interopRequireDefault(require("virtual-dom/vnode/vnode.js"));

var _vtext = _interopRequireDefault(require("virtual-dom/vnode/vtext.js"));

var _transform = require("../library/transform.cjs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import '@virtualpatterns/mablung-source-map-support/install'
const ConvertToNode = (0, _htmlToVdom.default)({
  'VNode': _vnode.default,
  'VText': _vtext.default
});
const {
  format: FormatJS
} = _prettier.default;
const Require = require;

async function main() {
  try {
    let path = Require.resolve('./dunno.pug');
    let AST = await _transform.Transform.getASTFromPath(path);
    console.log('-'.repeat(80));
    console.log('Transform.getASTFromPath(path)');
    console.log('-'.repeat(80));
    console.dir(AST, {
      'depth': null
    }); // let source = await Transform.getFunctionSourceFromPath(path)
    // console.log('-'.repeat(80))
    // console.log('Transform.getFunctionSourceFromPath(path)')
    // console.log('-'.repeat(80))
    // console.log(source)

    let virtualFn = await _transform.Transform.getFunctionFromPath(path);
    let source = virtualFn.toString();
    console.log('-'.repeat(80));
    console.log('Transform.getFunctionFromPath(path)');
    console.log('-'.repeat(80));
    console.log(source);
    let virtualNode = virtualFn({
      'abc': 1,
      'def': 'blah',
      'aaa': 1
    }, {
      'createNode': _h.default,
      'convertToNode': ConvertToNode
    });
    console.log('-'.repeat(80));
    console.log('virtualFn(...)');
    console.log('-'.repeat(80));
    console.dir(virtualNode, {
      'depth': null
    }); // let realNode = virtualNode.map((virtualNode) => CreateRealNode(virtualNode)) 
    // console.log('-'.repeat(80))
    // console.log('CreateRealNode(virtualNode)')
    // console.log('-'.repeat(80))
    // // console.dir(realNode, { 'depth': 4 })
    // // console.log('-'.repeat(80))
    // realNode.forEach((realNode) => console.log(FormatHTML(realNode.toString()))) 
    // console.log('-'.repeat(80))
    // let realHTML = virtualNode
    //   .map((virtualNode) => CreateRealNode(virtualNode))
    //   .join('\n')
    // console.log('-'.repeat(80))
    // console.log('Convert(virtualNode)')
    // console.log('-'.repeat(80))
    // console.log(FormatHTML(realHTML))
    // console.log('-'.repeat(80))
  } catch (error) {
    console.log('-'.repeat(80));
    console.error(error);
    console.log('-'.repeat(80));
  }
}

main();
//# sourceMappingURL=dunno.cjs.map