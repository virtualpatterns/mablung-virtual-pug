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
// Path = 'distributable-commonjs/test/library/resource/scenario/case/01-case-fall-through.pug'
function __getNode(__local = {}, __utility = {}) {
  function __getNode(__utility = {}) {
    const __node = []
    var friends = 0

    switch (friends) {
      case 0:
      case 1:
        __node.push(
          __utility.createNode(
            'p',
            {},
            (() => {
              const __node = []

              __node.push(
                ...[__utility.convertToNode('you have very few friends')].flat()
              )

              return __node
            })()
          )
        )

        break

      default:
        __node.push(
          __utility.createNode(
            'p',
            {},
            (() => {
              const __node = []

              __node.push(...[__utility.convertToNode('you have ')].flat())

              {
                let value = friends

                if (typeof value === 'string') {
                  __node.push(...[__utility.convertToNode(value)].flat())
                } else {
                  __node.push(value)
                }
              }

              __node.push(...[__utility.convertToNode(' friends')].flat())

              return __node
            })()
          )
        )
    }

    return __node
  }

  return __getNode(__utility)
}

function _default(__local = {}, __utility = _utility.default) {
  return __getNode(__local, __utility)
}
