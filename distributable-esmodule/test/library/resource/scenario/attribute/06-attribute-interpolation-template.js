// Created by @virtualpatterns/mablung-virtual-pug v0.0.1-15
// Path = 'distributable-esmodule/test/library/resource/scenario/attribute/06-attribute-interpolation-template.pug'
import Utility from '@virtualpatterns/mablung-virtual-pug/utility'
function __getNode(__local = {}, __utility = {}) {
  function __getNode(__utility = {}) {
    const __node = []
    var btnType = 'info'
    var btnSize = 'lg'
    // button(class!='btn btn-' + btnType + ' btn-' + btnSize type!='button')
    __node.push(
      __utility.createNode(
        'button',
        (() => {
          const __attributeNode = {}
          __utility.addAttribute(
            'class',
            'btn btn-' + btnType + ' btn-' + btnSize,
            __attributeNode
          )
          return __attributeNode
        })(),
        []
      )
    )
    __node.push(...[__utility.convertToNode(' ')].flat())
    __node.push(...[__utility.convertToNode('\n')].flat())
    __node.push(...[__utility.convertToNode(' ')].flat())
    // button(class!=`btn btn-${btnType} btn-${btnSize}` type!='button')
    __node.push(
      __utility.createNode(
        'button',
        (() => {
          const __attributeNode = {}
          __utility.addAttribute(
            'class',
            `btn btn-${btnType} btn-${btnSize}`,
            __attributeNode
          )
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
