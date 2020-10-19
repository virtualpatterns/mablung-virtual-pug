// Created by @virtualpatterns/mablung-virtual-pug v0.0.1-13
// FilePath = 'distributable-esmodule/library/transform.js'
// Path = 'distributable-esmodule/test/library/resource/scenario/attribute/16-and-attribute.pug'
import { Utility } from '@virtualpatterns/mablung-virtual-pug'
function __getNode(__local = {}, __utility = {}) {
  function __getNode(__utility = {}) {
    const __node = []
    __node.push(
      __utility.createNode(
        'div',
        (() => {
          const __attributeNode = {}
          __utility.addAttribute('id', 'foo', __attributeNode)
          __utility.addAttribute('data-bar', 'foo', __attributeNode)
          __utility.addAndAttribute({ 'data-foo': 'bar' }, __attributeNode)
          return __attributeNode
        })(),
        []
      )
    )
    return __node
  }
  return __getNode(__utility)
}
export default function (__local = {}, __utility = Utility) {
  return __getNode(__local, __utility)
}
