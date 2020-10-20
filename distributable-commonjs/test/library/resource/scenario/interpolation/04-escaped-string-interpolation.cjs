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
// Path = 'distributable-commonjs/test/library/resource/scenario/interpolation/04-escaped-string-interpolation.pug'
function __getNode(__local = {}, __utility = {}) {
  function __getNode(__utility = {}) {
    const __node = []
    var riskyBusiness =
      "<em>Some of the girls are wearing my mother's clothing.</em>"

    __node.push(
      __utility.createNode(
        'div',
        (() => {
          const __attributeNode = {}

          __utility.addAttribute('class', 'quote', __attributeNode)

          return __attributeNode
        })(),
        (() => {
          const __node = []

          __node.push(
            __utility.createNode(
              'p',
              {},
              (() => {
                const __node = []

                __node.push(...[__utility.convertToNode('Joel: ')].flat())

                {
                  let value = riskyBusiness

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
