// Created by @virtualpatterns/mablung-virtual-pug v0.0.1-13
// FilePath = 'distributable-esmodule/library/transform.js'
// Path = 'distributable-esmodule/test/library/resource/scenario/attribute/05-attribute-interpolation.pug'
import { Utility } from '@virtualpatterns/mablung-virtual-pug'
function __getNode(__local = {}, __utility = {}) {
  function __getNode(__utility = {}) {
    const __node = []
    var url = 'pug-test.html'
    __node.push(
      __utility.createNode(
        'a',
        (() => {
          const __attributeNode = {}
          __utility.addAttribute('href', '/' + url, __attributeNode)
          return __attributeNode
        })(),
        (() => {
          const __node = []
          __node.push(...[__utility.convertToNode('Link')].flat())
          return __node
        })()
      )
    )
    __node.push(...[__utility.convertToNode(' ')].flat())
    __node.push(...[__utility.convertToNode('\n')].flat())
    __node.push(...[__utility.convertToNode(' ')].flat())
    url = 'https://example.com/'
    __node.push(
      __utility.createNode(
        'a',
        (() => {
          const __attributeNode = {}
          __utility.addAttribute('href', url, __attributeNode)
          return __attributeNode
        })(),
        (() => {
          const __node = []
          __node.push(...[__utility.convertToNode('Another link')].flat())
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
