// Created by @virtualpatterns/mablung-virtual-pug v0.0.1-13
// FilePath = 'distributable-esmodule/library/transform.js'
// Path = 'distributable-esmodule/test/library/resource/scenario/text/05-whitespace-recommended-1.pug'
import { Utility } from '@virtualpatterns/mablung-virtual-pug'
function __getNode(__local = {}, __utility = {}) {
  function __getNode(__utility = {}) {
    const __node = []
    __node.push(...[__utility.convertToNode("Don't")].flat())
    __node.push(...[__utility.convertToNode('\n')].flat())
    __node.push(...[__utility.convertToNode(' ')].flat())
    __node.push(
      __utility.createNode(
        'button',
        (() => {
          const __attributeNode = {}
          __utility.addAttribute('id', 'self-destruct', __attributeNode)
          return __attributeNode
        })(),
        (() => {
          const __node = []
          __node.push(...[__utility.convertToNode('touch')].flat())
          return __node
        })()
      )
    )
    __node.push(...[__utility.convertToNode(' ')].flat())
    __node.push(...[__utility.convertToNode('\n')].flat())
    __node.push(...[__utility.convertToNode('me!')].flat())
    return __node
  }
  return __getNode(__utility)
}
export default function (__local = {}, __utility = Utility) {
  return __getNode(__local, __utility)
}
