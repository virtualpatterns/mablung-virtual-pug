import { createRequire as _createRequire } from "module"; // import '@virtualpatterns/mablung-source-map-support/install'
import CreateRealNode from 'virtual-dom/create-element.js';
import CreateNode from 'virtual-dom/h.js';
import FormatHTML from 'pretty';
import _FormatJS from 'prettier';

import _ConvertToNode from 'html-to-vdom';
import VirtualNode from 'virtual-dom/vnode/vnode.js';
import VirtualText from 'virtual-dom/vnode/vtext.js';

import { Transform } from '../library/transform.js';

const ConvertToNode = _ConvertToNode({ 'VNode': VirtualNode, 'VText': VirtualText });
const { format: FormatJS } = _FormatJS;
const Require = _createRequire(import.meta.url);

async function main() {

  try {

    let path = Require.resolve('./dunno.pug');
    let AST = await Transform.getASTFromPath(path);

    console.log('-'.repeat(80));
    console.log('Transform.getASTFromPath(path)');
    console.log('-'.repeat(80));
    console.dir(AST, { 'depth': null });

    // let source = await Transform.getFunctionSourceFromPath(path)

    // console.log('-'.repeat(80))
    // console.log('Transform.getFunctionSourceFromPath(path)')
    // console.log('-'.repeat(80))
    // console.log(source)

    let virtualFn = await Transform.getFunctionFromPath(path);

    let source = virtualFn.toString();

    console.log('-'.repeat(80));
    console.log('Transform.getFunctionFromPath(path)');
    console.log('-'.repeat(80));
    console.log(source);

    let virtualNode = virtualFn({ 'abc': 1, 'def': 'blah', 'aaa': 1 }, { 'createNode': CreateNode, 'convertToNode': ConvertToNode });

    console.log('-'.repeat(80));
    console.log('virtualFn(...)');
    console.log('-'.repeat(80));
    console.dir(virtualNode, { 'depth': null });

    // let realNode = virtualNode.map((virtualNode) => CreateRealNode(virtualNode)) 

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
//# sourceMappingURL=dunno.js.map