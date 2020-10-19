'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = _default

var _mablungVirtualPug = require('@virtualpatterns/mablung-virtual-pug')

// Created by @virtualpatterns/mablung-virtual-pug v0.0.1-13
// FilePath = 'distributable-commonjs/library/transform.cjs'
// Path = 'distributable-commonjs/test/library/resource/scenario/tag/00-default.pug'
function __getNode(__local = {}, __utility = {}) {
  function __getNode(__utility = {}) {
    const __node = []

    __node.push(
      __utility.createNode(
        'ul',
        {},
        (() => {
          const __node = []

          __node.push(
            __utility.createNode(
              'li',
              {},
              (() => {
                const __node = []

                __node.push(...[__utility.convertToNode('Item A')].flat())

                return __node
              })()
            )
          )

          __node.push(
            __utility.createNode(
              'li',
              {},
              (() => {
                const __node = []

                __node.push(...[__utility.convertToNode('Item B')].flat())

                return __node
              })()
            )
          )

          __node.push(
            __utility.createNode(
              'li',
              {},
              (() => {
                const __node = []

                __node.push(...[__utility.convertToNode('Item C')].flat())

                return __node
              })()
            )
          )

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
