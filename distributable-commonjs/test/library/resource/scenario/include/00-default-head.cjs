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
// Path = 'distributable-commonjs/test/library/resource/scenario/include/00-default-head.pug'
function __getNode(__local = {}, __utility = {}) {
  function __getNode(__utility = {}) {
    const __node = []

    __node.push(
      __utility.createNode(
        'head',
        {},
        (() => {
          const __node = []

          __node.push(
            __utility.createNode(
              'title',
              {},
              (() => {
                const __node = []

                __node.push(...[__utility.convertToNode('My Site')].flat())

                return __node
              })()
            )
          )

          __node.push(
            __utility.createNode(
              'script',
              (() => {
                const __attributeNode = {}

                __utility.addAttribute(
                  'src',
                  '/javascripts/jquery.js',
                  __attributeNode
                )

                return __attributeNode
              })(),
              []
            )
          )

          __node.push(
            __utility.createNode(
              'script',
              (() => {
                const __attributeNode = {}

                __utility.addAttribute(
                  'src',
                  '/javascripts/app.js',
                  __attributeNode
                )

                return __attributeNode
              })(),
              []
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
