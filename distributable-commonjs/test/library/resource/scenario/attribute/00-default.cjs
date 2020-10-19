'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = _default

var _mablungVirtualPug = require('@virtualpatterns/mablung-virtual-pug')

// Created by @virtualpatterns/mablung-virtual-pug v0.0.1-13
// FilePath = 'distributable-commonjs/library/transform.cjs'
// Path = 'distributable-commonjs/test/library/resource/scenario/attribute/00-default.pug'
function __getNode(__local = {}, __utility = {}) {
  function __getNode(__utility = {}) {
    const __node = []

    __node.push(
      __utility.createNode(
        'a',
        (() => {
          const __attributeNode = {}

          __utility.addAttribute('href', '//google.com', __attributeNode)

          return __attributeNode
        })(),
        (() => {
          const __node = []

          __node.push(...[__utility.convertToNode('Google')].flat())

          return __node
        })()
      )
    ) // |
    // |
    // a(class!='button' href!='//google.com') Google
    // |
    // |
    // a(class!='button', href!='//google.com') Google

    return __node
  }

  return __getNode(__utility)
}

function _default(__local = {}, __utility = _mablungVirtualPug.Utility) {
  return __getNode(__local, __utility)
}
