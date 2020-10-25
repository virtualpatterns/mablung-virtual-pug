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
// Path = 'distributable-commonjs/test/library/resource/scenario/attribute/03-multiline-attribute.skip.pug'
function __getNode(__local = {}, __utility = {}) {
  function __getNode(__utility = {}) {
    const __node = []

    __node.push(
      __utility.createNode(
        'input',
        (() => {
          const __attributeNode = {}

          __utility.addAttribute('type', 'text', __attributeNode)

          __utility.addAttribute(
            'data-json',
            `
  {
    "very-long": "piece of ",
    "data": true
  }
`,
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

function _default(__local = {}, __utility = _utility.default) {
  return __getNode(__local, __utility)
}
