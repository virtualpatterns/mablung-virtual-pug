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
// Path = 'distributable-commonjs/test/library/resource/scenario/text/06-whitespace-not-recommended.pug'
function __getNode(__local = {}, __utility = {}) {
  function __getNode(__utility = {}) {
    const __node = []

    __node.push(...[__utility.convertToNode('Hey, check out ')].flat())

    __node.push(
      __utility.createNode(
        'a',
        (() => {
          const __attributeNode = {}

          __utility.addAttribute(
            'href',
            'http://example.biz/kitteh.png',
            __attributeNode
          )

          return __attributeNode
        })(),
        (() => {
          const __node = []

          __node.push(...[__utility.convertToNode('this picture')].flat())

          return __node
        })()
      )
    )

    __node.push(...[__utility.convertToNode(' of my cat!')].flat())

    return __node
  }

  return __getNode(__utility)
}

function _default(__local = {}, __utility = _utility.default) {
  return __getNode(__local, __utility)
}
