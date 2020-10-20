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

// Created by @virtualpatterns/mablung-virtual-pug v0.0.1-14
// Path = 'distributable-commonjs/test/library/resource/scenario/text/04-whitespace-1.pug'
function __getNode(__local = {}, __utility = {}) {
  function __getNode(__utility = {}) {
    const __node = []

    __node.push(...[__utility.convertToNode('You put the em')].flat())

    __node.push(
      __utility.createNode(
        'em',
        {},
        (() => {
          const __node = []

          __node.push(...[__utility.convertToNode('pha')].flat())

          return __node
        })()
      )
    )

    __node.push(...[__utility.convertToNode('sis on the wrong syl')].flat())

    __node.push(
      __utility.createNode(
        'em',
        {},
        (() => {
          const __node = []

          __node.push(...[__utility.convertToNode('la')].flat())

          return __node
        })()
      )
    )

    __node.push(...[__utility.convertToNode('ble.')].flat())

    return __node
  }

  return __getNode(__utility)
}

function _default(__local = {}, __utility = _utility.default) {
  return __getNode(__local, __utility)
}
