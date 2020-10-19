'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = _default

var _mablungVirtualPug = require('@virtualpatterns/mablung-virtual-pug')

// Created by @virtualpatterns/mablung-virtual-pug v0.0.1-13
// FilePath = 'distributable-commonjs/library/transform.cjs'
// Path = 'distributable-commonjs/test/library/resource/scenario/mixin/06-rest-arguments.pug'
function __getNode(__local = {}, __utility = {}) {
  function __getNode(__utility = {}) {
    const __node = []

    function __mixin__list(attribute, block, id, ...items) {
      const attributes = attribute
      const __node = []

      __node.push(
        __utility.createNode(
          'ul',
          (() => {
            const __attributeNode = {}

            __utility.addAttribute('id', id, __attributeNode)

            return __attributeNode
          })(),
          (() => {
            const __node = []

            __utility.forEach(items, (item) => {
              __node.push(
                __utility.createNode(
                  'li',
                  {},
                  (() => {
                    const __node = []
                    {
                      let value = item

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
            })

            return __node
          })()
        )
      )

      return __node
    }

    __node.push(...__mixin__list(undefined, undefined, 'my-list', 1, 2, 3, 4))

    return __node
  }

  return __getNode(__utility)
}

function _default(__local = {}, __utility = _mablungVirtualPug.Utility) {
  return __getNode(__local, __utility)
}
