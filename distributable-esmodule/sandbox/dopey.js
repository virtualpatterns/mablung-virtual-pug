import { createRequire as _createRequire } from "module";import '@virtualpatterns/mablung-source-map-support/install';
import Format from 'pretty';

import Create from 'virtual-dom/create-element.js';
import Diff from 'virtual-dom/diff.js';
import Patch from 'virtual-dom/patch.js';

import { Transform } from '../library/transform.js';

const Require = _createRequire(import.meta.url);

async function main() {

  try {

    let path = Require.resolve('./dopey.pug');
    let virtualFn = await Transform.getFunctionFromPath(path);

    let currentVirtualNode = virtualFn({ 'name': 'Frank' })[0];
    let nextVirtualNode = virtualFn({ 'name': 'Jeff' })[0];

    let realNode = Create(currentVirtualNode);

    console.log('-'.repeat(80));
    console.log(Format(realNode.toString()));

    let diff = Diff(currentVirtualNode, nextVirtualNode);

    console.log('-'.repeat(80));
    console.dir(diff, { 'depth': null });

    Patch(realNode, diff);

    console.log('-'.repeat(80));
    console.log(Format(realNode.toString()));

  } catch (error) {
    console.log('-'.repeat(80));
    console.error(error);
    console.log('-'.repeat(80));
  }

}

main();
//# sourceMappingURL=dopey.js.map