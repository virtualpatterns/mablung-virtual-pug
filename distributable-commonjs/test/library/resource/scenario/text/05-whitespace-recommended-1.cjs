'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = _default

var _mablungVirtualPug = require('@virtualpatterns/mablung-virtual-pug')

// Created by @virtualpatterns/mablung-virtual-pug v0.0.1-13
// FilePath = 'distributable-commonjs/library/transform.cjs'
// Path = 'distributable-commonjs/test/library/resource/scenario/text/05-whitespace-recommended-1.pug'
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

function _default(__local = {}, __utility = _mablungVirtualPug.Utility) {
  return __getNode(__local, __utility)
}
