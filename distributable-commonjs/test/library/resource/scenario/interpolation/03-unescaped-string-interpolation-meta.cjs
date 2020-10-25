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
// Path = 'distributable-commonjs/test/library/resource/scenario/interpolation/03-unescaped-string-interpolation-meta.pug'
function __getNode(__local = {}, __utility = {}) {
  function __getNode(__utility = {}) {
    const __node = []

    __node.push(
      __utility.createNode(
        'p',
        {},
        (() => {
          const __node = []

          __node.push(
            ...[
              __utility.convertToNode('Escaping works with #{interpolation}')
            ].flat()
          )

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

          __node.push(
            ...[__utility.convertToNode('Interpolation works with ')].flat()
          )

          {
            let value = '!{interpolation}'

            if (typeof value === 'string') {
              __node.push(...[__utility.convertToNode(value)].flat())
            } else {
              __node.push(value)
            }
          }

          __node.push(...[__utility.convertToNode(' too!')].flat())

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
