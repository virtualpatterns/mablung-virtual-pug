'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = _default

var _utility = _interopRequireDefault(
  require('../../../../../../library/utility.cjs')
)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

// Created by @virtualpatterns/mablung-virtual-pug v0.0.1-15
// Path = 'distributable-commonjs/test/library/resource/transform/create-module-from-path/file/00-content.pug'
function __getNode(__local = {}, __utility = {}) {
  function __getNode(__utility = {}) {
    const __node = []
    var authenticated = true

    __node.push(
      __utility.createNode(
        'body',
        (() => {
          const __attributeNode = {}

          __utility.addAttribute(
            'class',
            authenticated ? 'authed' : 'anon',
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
