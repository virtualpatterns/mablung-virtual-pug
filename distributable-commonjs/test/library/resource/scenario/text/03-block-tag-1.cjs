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
// Path = 'distributable-commonjs/test/library/resource/scenario/text/03-block-tag-1.pug'
function __getNode(__local = {}, __utility = {}) {
  function __getNode(__utility = {}) {
    const __node = []

    __node.push(
      __utility.createNode(
        'script',
        {},
        (() => {
          const __node = []

          __node.push(...[__utility.convertToNode('if (usingPug)')].flat())

          __node.push(...[__utility.convertToNode('\n')].flat())

          __node.push(
            ...[
              __utility.convertToNode("  console.log('you are awesome')")
            ].flat()
          )

          __node.push(...[__utility.convertToNode('\n')].flat())

          __node.push(...[__utility.convertToNode('else')].flat())

          __node.push(...[__utility.convertToNode('\n')].flat())

          __node.push(
            ...[__utility.convertToNode("  console.log('use pug')")].flat()
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
