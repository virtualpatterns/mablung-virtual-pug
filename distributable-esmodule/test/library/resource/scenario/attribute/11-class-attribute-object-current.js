// Created by @virtualpatterns/mablung-virtual-pug v0.0.1-13
// FilePath = 'distributable-esmodule/library/transform.js'
// Path = 'distributable-esmodule/test/library/resource/scenario/attribute/11-class-attribute-object-current.pug'
import { Utility } from '@virtualpatterns/mablung-virtual-pug'
function __getNode(__local = {}, __utility = {}) {
  function __getNode(__utility = {}) {
    const __node = []
    var currentUrl = '/about'
    // a(class!={active: currentUrl === '/'} href!='/') Home
    __node.push(
      __utility.createNode(
        'a',
        (() => {
          const __attributeNode = {}
          __utility.addAttribute(
            'class',
            { active: currentUrl === '/' },
            __attributeNode
          )
          return __attributeNode
        })(),
        (() => {
          const __node = []
          __node.push(...[__utility.convertToNode('Home')].flat())
          return __node
        })()
      )
    )
    __node.push(...[__utility.convertToNode(' ')].flat())
    __node.push(...[__utility.convertToNode('\n')].flat())
    __node.push(...[__utility.convertToNode(' ')].flat())
    // a(class!={active: currentUrl === '/about'} href!='/about') About
    __node.push(
      __utility.createNode(
        'a',
        (() => {
          const __attributeNode = {}
          __utility.addAttribute(
            'class',
            { active: currentUrl === '/about' },
            __attributeNode
          )
          return __attributeNode
        })(),
        (() => {
          const __node = []
          __node.push(...[__utility.convertToNode('About')].flat())
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
