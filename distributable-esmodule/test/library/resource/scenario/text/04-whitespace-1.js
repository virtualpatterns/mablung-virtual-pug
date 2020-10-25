// Created by @virtualpatterns/mablung-virtual-pug v0.0.1-15
// Path = 'distributable-esmodule/test/library/resource/scenario/text/04-whitespace-1.pug'
import Utility from '@virtualpatterns/mablung-virtual-pug/utility'
function __getNode(__local = {}, __utility = {}) {
  function __getNode(__utility = {}) {
    const __node = []
    __node.push(...[__utility.convertToNode('You put the em')].flat())
    __node.push(
      __utility.createNode(
        'em',
        {},
        (() => {
          const __node = []
          __node.push(...[__utility.convertToNode('pha')].flat())
          return __node
        })()
      )
    )
    __node.push(...[__utility.convertToNode('sis on the wrong syl')].flat())
    __node.push(
      __utility.createNode(
        'em',
        {},
        (() => {
          const __node = []
          __node.push(...[__utility.convertToNode('la')].flat())
          return __node
        })()
      )
    )
    __node.push(...[__utility.convertToNode('ble.')].flat())
    return __node
  }
  return __getNode(__utility)
}
export default function (__local = {}, __utility = Utility) {
  return __getNode(__local, __utility)
}
