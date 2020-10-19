'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = _default

var _mablungVirtualPug = require('@virtualpatterns/mablung-virtual-pug')

// Created by @virtualpatterns/mablung-virtual-pug v0.0.1-13
// FilePath = 'distributable-commonjs/library/transform.cjs'
// Path = 'distributable-commonjs/test/library/resource/scenario/attribute/10-class-attribute-array.pug'
function __getNode(__local = {}, __utility = {}) {
  function __getNode(__utility = {}) {
    const __node = []
    var classes = ['foo', 'bar', 'baz']

    __node.push(
      __utility.createNode(
        'a',
        (() => {
          const __attributeNode = {}

          __utility.addAttribute('class', classes, __attributeNode)

          return __attributeNode
        })(),
        []
      )
    )

    __node.push(...[__utility.convertToNode(' ')].flat())

    __node.push(...[__utility.convertToNode('\n')].flat())

    __node.push(...[__utility.convertToNode(' ')].flat()) // the class attribute may also be repeated to merge arrays

    __node.push(
      __utility.createNode(
        'a',
        (() => {
          const __attributeNode = {}

          __utility.addAttribute('class', 'bang', __attributeNode)

          __utility.addAttribute('class', classes, __attributeNode)

          __utility.addAttribute('class', ['bing'], __attributeNode)

          return __attributeNode
        })(),
        []
      )
    )

    return __node
  }

  return __getNode(__utility)
}

function _default(__local = {}, __utility = _mablungVirtualPug.Utility) {
  return __getNode(__local, __utility)
}
