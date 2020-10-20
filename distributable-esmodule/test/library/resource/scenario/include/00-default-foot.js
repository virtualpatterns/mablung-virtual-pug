// Created by @virtualpatterns/mablung-virtual-pug v0.0.1-14
// Path = 'distributable-esmodule/test/library/resource/scenario/include/00-default-foot.pug'
import Utility from '@virtualpatterns/mablung-virtual-pug/utility'
function __getNode(__local = {}, __utility = {}) {
  function __getNode(__utility = {}) {
    const __node = []
    __node.push(
      __utility.createNode(
        'footer',
        (() => {
          const __attributeNode = {}
          __utility.addAttribute('id', 'footer', __attributeNode)
          return __attributeNode
        })(),
        (() => {
          const __node = []
          __node.push(
            __utility.createNode(
              'p',
              {},
              (() => {
                const __node = []
                __node.push(
                  ...[__utility.convertToNode('Copyright (c) foobar')].flat()
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
  return __getNode(__utility)
}
export default function (__local = {}, __utility = Utility) {
  return __getNode(__local, __utility)
}
