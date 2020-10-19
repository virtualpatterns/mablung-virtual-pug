// Created by @virtualpatterns/mablung-virtual-pug v0.0.1-13
// FilePath = 'distributable-esmodule/library/transform.js'
// Path = 'distributable-esmodule/test/library/resource/scenario/include/00-default-head.pug'
import { Utility } from '@virtualpatterns/mablung-virtual-pug'
function __getNode(__local = {}, __utility = {}) {
  function __getNode(__utility = {}) {
    const __node = []
    __node.push(
      __utility.createNode(
        'head',
        {},
        (() => {
          const __node = []
          __node.push(
            __utility.createNode(
              'title',
              {},
              (() => {
                const __node = []
                __node.push(...[__utility.convertToNode('My Site')].flat())
                return __node
              })()
            )
          )
          __node.push(
            __utility.createNode(
              'script',
              (() => {
                const __attributeNode = {}
                __utility.addAttribute(
                  'src',
                  '/javascripts/jquery.js',
                  __attributeNode
                )
                return __attributeNode
              })(),
              []
            )
          )
          __node.push(
            __utility.createNode(
              'script',
              (() => {
                const __attributeNode = {}
                __utility.addAttribute(
                  'src',
                  '/javascripts/app.js',
                  __attributeNode
                )
                return __attributeNode
              })(),
              []
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
