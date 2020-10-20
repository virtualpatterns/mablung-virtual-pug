// Created by @virtualpatterns/mablung-virtual-pug v0.0.1-14
// Path = 'distributable-esmodule/test/library/resource/scenario/mixin/06-rest-arguments.pug'
import Utility from '@virtualpatterns/mablung-virtual-pug/utility'
function __getNode(__local = {}, __utility = {}) {
  function __getNode(__utility = {}) {
    const __node = []
    function __mixin__list(attribute, block, id, ...items) {
      const attributes = attribute
      const __node = []
      __node.push(
        __utility.createNode(
          'ul',
          (() => {
            const __attributeNode = {}
            __utility.addAttribute('id', id, __attributeNode)
            return __attributeNode
          })(),
          (() => {
            const __node = []
            __utility.forEach(items, (item) => {
              __node.push(
                __utility.createNode(
                  'li',
                  {},
                  (() => {
                    const __node = []
                    {
                      let value = item
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
            })
            return __node
          })()
        )
      )
      return __node
    }
    __node.push(...__mixin__list(undefined, undefined, 'my-list', 1, 2, 3, 4))

    return __node
  }
  return __getNode(__utility)
}
export default function (__local = {}, __utility = Utility) {
  return __getNode(__local, __utility)
}
