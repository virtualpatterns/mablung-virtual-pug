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
// Path = 'distributable-commonjs/test/library/resource/scenario/include/02-filtered-text.skip.pug'
function __getNode(__local = {}, __utility = {}) {
  function __getNode(__utility = {}) {
    const __node = []

    __node.push(
      __utility.createNode(
        'html',
        {},
        (() => {
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

                      __node.push(
                        ...[__utility.convertToNode('An Article')].flat()
                      )

                      return __node
                    })()
                  )
                )

                return __node
              })()
            )
          )

          __node.push(
            __utility.createNode(
              'body',
              {},
              (() => {
                const __node = []

                __node.push(
                  ...[
                    __utility.convertToNode(
                      '# 02-filtered-text-markdown.md\n\nThis is an article written in markdown.'
                    )
                  ].flat()
                )

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
