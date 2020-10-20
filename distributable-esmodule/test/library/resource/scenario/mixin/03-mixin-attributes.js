// Created by @virtualpatterns/mablung-virtual-pug v0.0.1-14
// Path = 'distributable-esmodule/test/library/resource/scenario/mixin/03-mixin-attributes.pug'
import Utility from '@virtualpatterns/mablung-virtual-pug/utility'
function __getNode(__local = {}, __utility = {}) {
  function __getNode(__utility = {}) {
    const __node = []
    function __mixin__link(attribute, block, href, name) {
      const attributes = attribute
      const __node = []
      // attributes == {class: "btn"}
      // a(class!=attributes.class href!=href)!= name
      __node.push(
        __utility.createNode(
          'a',
          (() => {
            const __attributeNode = {}
            __utility.addAttribute('class', attributes.class, __attributeNode)
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
      ...__mixin__link(
        (() => {
          const __attributeNode = {}
          __utility.addAttribute('class', 'btn', __attributeNode)
          return __attributeNode
        })(),
        undefined,
        '/foo',
        'foo'
      )
    )

    return __node
  }
  return __getNode(__utility)
}
export default function (__local = {}, __utility = Utility) {
  return __getNode(__local, __utility)
}
