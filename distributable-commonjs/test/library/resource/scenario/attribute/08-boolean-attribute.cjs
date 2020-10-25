'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = _default

var _utility = _interopRequireDefault(
  require('@virtualpatterns/mablung-virtual-pug/utility')
)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

// Created by @virtualpatterns/mablung-virtual-pug v0.0.1-15
// Path = 'distributable-commonjs/test/library/resource/scenario/attribute/08-boolean-attribute.pug'
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

function _default(__local = {}, __utility = _utility.default) {
  return __getNode(__local, __utility)
}
