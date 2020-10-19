// Created by @virtualpatterns/mablung-virtual-pug v0.0.1-13
// FilePath = 'distributable-esmodule/library/transform.js'
// Path = 'distributable-esmodule/test/library/resource/scenario/code/00-unbuffered-code.pug'
import { Utility } from '@virtualpatterns/mablung-virtual-pug'
function __getNode(__local = {}, __utility = {}) {
  function __getNode(__utility = {}) {
    const __node = []
    for (var x = 0; x < 1; x++) {
      __node.push(
        __utility.createNode(
          'li',
          {},
          (() => {
            const __node = []
            __node.push(...[__utility.convertToNode('item')].flat())
            return __node
          })()
        )
      )
    }
    return __node
  }
  return __getNode(__utility)
}
export default function (__local = {}, __utility = Utility) {
  return __getNode(__local, __utility)
}
