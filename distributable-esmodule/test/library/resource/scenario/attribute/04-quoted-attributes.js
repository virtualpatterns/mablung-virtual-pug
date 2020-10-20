// Created by @virtualpatterns/mablung-virtual-pug v0.0.1-14
// Path = 'distributable-esmodule/test/library/resource/scenario/attribute/04-quoted-attributes.pug'
import Utility from '@virtualpatterns/mablung-virtual-pug/utility'
function __getNode(__local = {}, __utility = {}) {
  function __getNode(__utility = {}) {
    const __node = []
    // div(class!='div-class', (click)!='play()')
    // div(class!='div-class' '(click)'!='play()')
    __node.push(
      __utility.createNode(
        'div',
        (() => {
          const __attributeNode = {}
          __utility.addAttribute('(click)', 'play()', __attributeNode)
          return __attributeNode
        })(),
        []
      )
    )
    __node.push(
      __utility.createNode(
        'div',
        (() => {
          const __attributeNode = {}
          __utility.addAttribute('(click)', 'play()', __attributeNode)
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
