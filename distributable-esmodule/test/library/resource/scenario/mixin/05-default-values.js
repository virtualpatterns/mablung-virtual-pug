// Created by @virtualpatterns/mablung-virtual-pug v0.0.1-14
// Path = 'distributable-esmodule/test/library/resource/scenario/mixin/05-default-values.pug'
import Utility from '@virtualpatterns/mablung-virtual-pug/utility'
function __getNode(__local = {}, __utility = {}) {
  function __getNode(__utility = {}) {
    const __node = []
    // Declaration
    function __mixin__article(attribute, block, title = 'Default Title') {
      const attributes = attribute
      const __node = []
      __node.push(
        __utility.createNode(
          'div',
          (() => {
            const __attributeNode = {}
            __utility.addAttribute('class', 'article', __attributeNode)
            return __attributeNode
          })(),
          (() => {
            const __node = []
            __node.push(
              __utility.createNode(
                'div',
                (() => {
                  const __attributeNode = {}
                  __utility.addAttribute(
                    'class',
                    'article-wrapper',
                    __attributeNode
                  )
                  return __attributeNode
                })(),
                (() => {
                  const __node = []
                  __node.push(
                    __utility.createNode(
                      'h1',
                      {},
                      (() => {
                        const __node = []
                        {
                          let value = title
                          if (typeof value === 'string') {
                            __node.push(
                              ...[__utility.convertToNode(value)].flat()
                            )
                          } else {
                            __node.push(value)
                          }
                        }
                        return __node
                      })()
                    )
                  )
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
    __node.push(...__mixin__article(undefined, undefined))

    __node.push(...__mixin__article(undefined, undefined, 'Hello world'))

    return __node
  }
  return __getNode(__utility)
}
export default function (__local = {}, __utility = Utility) {
  return __getNode(__local, __utility)
}
