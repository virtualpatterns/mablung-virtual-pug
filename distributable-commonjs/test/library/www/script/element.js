// Created by @virtualpatterns/mablung-virtual-pug v0.0.1-15
// Path = 'distributable-commonjs/test/library/www/script/element.pug'
import Utility from '../../../../library/utility.cjs'
function __getNode(__local = {}, __utility = {}) {
  const { list } = __local
  function __getNode(__utility = {}) {
    const __node = []
    __node.push(
      __utility.createNode(
        'ul',
        (() => {
          const __attributeNode = {}
          __utility.addAttribute('class', 'element', __attributeNode)
          return __attributeNode
        })(),
        (() => {
          const __node = []
          __utility.forEach(list, (item, index) => {
            __node.push(
              __utility.createNode(
                'li',
                (() => {
                  const __attributeNode = {}
                  __utility.addAttribute('class', 'element', __attributeNode)
                  __utility.addAttribute('id', index, __attributeNode)
                  __utility.addAttribute('data-item', item, __attributeNode)
                  return __attributeNode
                })(),
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
  return __getNode(__utility)
}
export default function (__local = {}, __utility = Utility) {
  return __getNode(__local, __utility)
}
