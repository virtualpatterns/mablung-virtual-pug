// Created by @virtualpatterns/mablung-virtual-pug v0.0.1-15
// Path = 'distributable-esmodule/test/library/resource/scenario/tag/00-default.pug'
import Utility from '@virtualpatterns/mablung-virtual-pug/utility'
function __getNode(__local = {}, __utility = {}) {
  function __getNode(__utility = {}) {
    const __node = []
    __node.push(
      __utility.createNode(
        'ul',
        {},
        (() => {
          const __node = []
          __node.push(
            __utility.createNode(
              'li',
              {},
              (() => {
                const __node = []
                __node.push(...[__utility.convertToNode('Item A')].flat())
                return __node
              })()
            )
          )
          __node.push(
            __utility.createNode(
              'li',
              {},
              (() => {
                const __node = []
                __node.push(...[__utility.convertToNode('Item B')].flat())
                return __node
              })()
            )
          )
          __node.push(
            __utility.createNode(
              'li',
              {},
              (() => {
                const __node = []
                __node.push(...[__utility.convertToNode('Item C')].flat())
                return __node
              })()
            )
          )
          return __node
        })()
      )
    )
    return __node
  }
  return __getNode(__utility)
}
export default function (__local = {}, __utility = Utility) {
  return __getNode(__local, __utility)
}
