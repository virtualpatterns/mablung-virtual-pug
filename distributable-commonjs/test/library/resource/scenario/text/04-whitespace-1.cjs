'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = _default

var _mablungVirtualPug = require('@virtualpatterns/mablung-virtual-pug')

// Created by @virtualpatterns/mablung-virtual-pug v0.0.1-13
// FilePath = 'distributable-commonjs/library/transform.cjs'
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

function _default(__local = {}, __utility = _mablungVirtualPug.Utility) {
  return __getNode(__local, __utility)
}
