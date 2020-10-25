// Created by @virtualpatterns/mablung-virtual-pug v0.0.1-15
// Path = 'distributable-esmodule/test/library/resource/scenario/mixin/01-default-arguments.pug'
import Utility from '@virtualpatterns/mablung-virtual-pug/utility'
function __getNode(__local = {}, __utility = {}) {
  function __getNode(__utility = {}) {
    const __node = []
    function __mixin__pet(attribute, block, name) {
      const attributes = attribute
      const __node = []
      __node.push(
        __utility.createNode(
          'li',
          (() => {
            const __attributeNode = {}
            __utility.addAttribute('class', 'pet', __attributeNode)
            return __attributeNode
          })(),
          (() => {
            const __node = []
            {
              let value = name
              if (typeof value === 'string') {
                __node.push(...[__utility.convertToNode(value)].flat())
              } else {
                __node.push(value)
              }
            }
            return __node
          })()
        )
      )
      return __node
    }
    __node.push(
      __utility.createNode(
        'ul',
        {},
        (() => {
          const __node = []
          __node.push(...__mixin__pet(undefined, undefined, 'cat'))

          __node.push(...__mixin__pet(undefined, undefined, 'dog'))

          __node.push(...__mixin__pet(undefined, undefined, 'pig'))

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
