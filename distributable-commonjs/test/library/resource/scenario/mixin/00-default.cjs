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
// Path = 'distributable-commonjs/test/library/resource/scenario/mixin/00-default.pug'
function __getNode(__local = {}, __utility = {}) {
  function __getNode(__utility = {}) {
    const __node = [] // Declaration

    function __mixin__list(attribute, block) {
      const attributes = attribute
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

                  __node.push(...[__utility.convertToNode('foo')].flat())

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

                  __node.push(...[__utility.convertToNode('bar')].flat())

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

                  __node.push(...[__utility.convertToNode('baz')].flat())

                  return __node
                })()
              )
            )

            return __node
          })()
        )
      )

      return __node
    } // Use

    __node.push(
      __utility.createNode(
        'div',
        {},
        (() => {
          const __node = []

          __node.push(...__mixin__list(undefined, undefined))

          __node.push(...__mixin__list(undefined, undefined))

          return __node
        })()
      )
    )

    return __node
  }

  return __getNode(__utility)
}

function _default(__local = {}, __utility = _utility.default) {
  return __getNode(__local, __utility)
}
