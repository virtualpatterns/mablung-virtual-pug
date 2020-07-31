import { createRequire as _createRequire } from "module";import '@virtualpatterns/mablung-source-map-support/install.js';
import Pug from 'pug';

import _Convert from 'html-to-vdom';
import VirtualNode from 'virtual-dom/vnode/vnode.js';
import VirtualText from 'virtual-dom/vnode/vtext.js';

import { Transform } from '../index.js';

const Convert = _Convert({ 'VNode': VirtualNode, 'VText': VirtualText });
const Require = _createRequire(import.meta.url);

async function main() {

  try {

    let path = Require.resolve('./digger.pug');

    let pugHTML = null;
    pugHTML = Pug.compileFile(path)();

    let pugNode = Convert(pugHTML);

    console.log('-'.repeat(80));
    console.log('pugNode');
    console.log('-'.repeat(80));
    console.dir(pugNode, { 'depth': null });

    let myNode = (await Transform.getFunctionFromPath(path))();

    console.log('-'.repeat(80));
    console.log('myNode');
    console.log('-'.repeat(80));
    console.dir(myNode, { 'depth': null });

  } catch (error) {
    console.log('-'.repeat(80));
    console.error(error);
    console.log('-'.repeat(80));
  }

}

main();
//# sourceMappingURL=digger.js.map