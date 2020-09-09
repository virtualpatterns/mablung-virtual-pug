import Create from 'virtual-dom/create-element.js'
// import Diff from 'virtual-dom/diff.js'
// import Patch from 'virtual-dom/patch.js'

import VirtualContentFn from './element.pug.js'

let virtualContent = VirtualContentFn({ 'list': [ 'a', 'b', 'c' ] })[0]
let realContent = Create(virtualContent)

document.querySelector('div.body').appendChild(realContent)

// let newVirtualContent = VirtualContentFn({ 'list': [ 'a', 'ab', 'bb', 'cb', 'c' ] })[0]

// Patch(document.querySelector('ul.element'), Diff(virtualContent, newVirtualContent))
