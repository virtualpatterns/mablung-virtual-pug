'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = _default

var _mablungVirtualPug = require('@virtualpatterns/mablung-virtual-pug')

// Created by @virtualpatterns/mablung-virtual-pug v0.0.1-13
// FilePath = 'distributable-commonjs/library/transform.cjs'
// Path = 'distributable-commonjs/test/library/resource/scenario/mixin/01-default-arguments.pug'
function __getNode(__local = {}, __utility = {}) {
  function __getNode(__utility = {}) {
    const __node = []

    function __mixin__pet(attribute, block, name) {
      const attributes = attribute
      const __node = []

      __node.push(
        __utility.createNode(
          'li',
          (() => {
            const __attributeNode = {}

            __utility.addAttribute('class', 'pet', __attributeNode)

            return __attributeNode
          })(),
          (() => {
            const __node = []
            {
              let value = name

              if (typeof value === 'string') {
                __node.push(...[__utility.convertToNode(value)].flat())
              } else {
                __node.push(value)
              }
            }
            return __node
          })()
        )
      )

      return __node
    }

    __node.push(
      __utility.createNode(
        'ul',
        {},
        (() => {
          const __node = []

          __node.push(...__mixin__pet(undefined, undefined, 'cat'))

          __node.push(...__mixin__pet(undefined, undefined, 'dog'))

          __node.push(...__mixin__pet(undefined, undefined, 'pig'))

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
