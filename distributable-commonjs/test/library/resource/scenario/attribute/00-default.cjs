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

function _default(__local = {}, __utility = _utility.default) {
  return __getNode(__local, __utility)
}
