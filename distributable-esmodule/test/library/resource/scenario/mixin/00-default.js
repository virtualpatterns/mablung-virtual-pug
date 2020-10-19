// Created by @virtualpatterns/mablung-virtual-pug v0.0.1-13
// FilePath = 'distributable-esmodule/library/transform.js'
// Path = 'distributable-esmodule/test/library/resource/scenario/mixin/00-default.pug'
import { Utility } from '@virtualpatterns/mablung-virtual-pug'
function __getNode(__local = {}, __utility = {}) {
  function __getNode(__utility = {}) {
    const __node = []
    // Declaration
    function __mixin__list(attribute, block) {
      const attributes = attribute
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
                  __node.push(...[__utility.convertToNode('foo')].flat())
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
                  __node.push(...[__utility.convertToNode('bar')].flat())
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
                  __node.push(...[__utility.convertToNode('baz')].flat())
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
    // Use
    __node.push(
      __utility.createNode(
        'div',
        {},
        (() => {
          const __node = []
          __node.push(...__mixin__list(undefined, undefined))

          __node.push(...__mixin__list(undefined, undefined))

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
