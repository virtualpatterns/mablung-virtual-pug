// Created by @virtualpatterns/mablung-virtual-pug v0.0.1-13
// FilePath = 'distributable-esmodule/library/transform.js'
// Path = 'distributable-esmodule/test/library/resource/scenario/attribute/08-boolean-attribute.pug'
import { Utility } from '@virtualpatterns/mablung-virtual-pug'
function __getNode(__local = {}, __utility = {}) {
  function __getNode(__utility = {}) {
    const __node = []
    __node.push(
      __utility.createNode(
        'input',
        (() => {
          const __attributeNode = {}
          __utility.addAttribute('type', 'checkbox', __attributeNode)
          __utility.addAttribute('checked', true, __attributeNode)
          return __attributeNode
        })(),
        []
      )
    )
    __node.push(...[__utility.convertToNode(' ')].flat())
    __node.push(...[__utility.convertToNode('\n')].flat())
    __node.push(...[__utility.convertToNode(' ')].flat())
    __node.push(
      __utility.createNode(
        'input',
        (() => {
          const __attributeNode = {}
          __utility.addAttribute('type', 'checkbox', __attributeNode)
          __utility.addAttribute('checked', true, __attributeNode)
          return __attributeNode
        })(),
        []
      )
    )
    __node.push(...[__utility.convertToNode(' ')].flat())
    __node.push(...[__utility.convertToNode('\n')].flat())
    __node.push(...[__utility.convertToNode(' ')].flat())
    __node.push(
      __utility.createNode(
        'input',
        (() => {
          const __attributeNode = {}
          __utility.addAttribute('type', 'checkbox', __attributeNode)
          __utility.addAttribute('checked', false, __attributeNode)
          return __attributeNode
        })(),
        []
      )
    )
    __node.push(...[__utility.convertToNode(' ')].flat())
    __node.push(...[__utility.convertToNode('\n')].flat())
    __node.push(...[__utility.convertToNode(' ')].flat())
    __node.push(
      __utility.createNode(
        'input',
        (() => {
          const __attributeNode = {}
          __utility.addAttribute('type', 'checkbox', __attributeNode)
          __utility.addAttribute('checked', true.toString(), __attributeNode)
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
