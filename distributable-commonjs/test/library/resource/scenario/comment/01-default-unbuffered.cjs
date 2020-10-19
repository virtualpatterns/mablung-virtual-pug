'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = _default

var _mablungVirtualPug = require('@virtualpatterns/mablung-virtual-pug')

// Created by @virtualpatterns/mablung-virtual-pug v0.0.1-13
// FilePath = 'distributable-commonjs/library/transform.cjs'
// Path = 'distributable-commonjs/test/library/resource/scenario/comment/01-default-unbuffered.pug'
function __getNode(__local = {}, __utility = {}) {
  function __getNode(__utility = {}) {
    const __node = [] // will not output within markup

    __node.push(
      __utility.createNode(
        'p',
        {},
        (() => {
          const __node = []

          __node.push(...[__utility.convertToNode('foo')].flat())

          return __node
        })()
      )
    )

    __node.push(
      __utility.createNode(
        'p',
        {},
        (() => {
          const __node = []

          __node.push(...[__utility.convertToNode('bar')].flat())

          return __node
        })()
      )
    )

    return __node
  }

  return __getNode(__utility)
}

function _default(__local = {}, __utility = _mablungVirtualPug.Utility) {
  return __getNode(__local, __utility)
}
