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
// Path = 'distributable-commonjs/test/library/resource/scenario/iteration/01-each-index.pug'
function __getNode(__local = {}, __utility = {}) {
  function __getNode(__utility = {}) {
    const __node = []

    __node.push(
      __utility.createNode(
        'ul',
        {},
        (() => {
          const __node = []

          __utility.forEach(['zero', 'one', 'two'], (val, index) => {
            __node.push(
              __utility.createNode(
                'li',
                {},
                (() => {
                  const __node = []
                  {
                    let value = index + ': ' + val

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

  return __getNode(__utility)
}

function _default(__local = {}, __utility = _utility.default) {
  return __getNode(__local, __utility)
}
