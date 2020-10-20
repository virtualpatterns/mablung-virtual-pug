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
// Path = 'distributable-commonjs/test/library/resource/scenario/inheritance/00-default.pug'
function __getNode(__local = {}, __utility = {}) {
  const { title } = __local

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
                        ...[__utility.convertToNode('My Site - ')].flat()
                      )

                      {
                        let value = title

                        if (typeof value === 'string') {
                          __node.push(
                            ...[__utility.convertToNode(value)].flat()
                          )
                        } else {
                          __node.push(value)
                        }
                      }
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
                        '/jquery.js',
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

          __node.push(
            __utility.createNode(
              'body',
              {},
              (() => {
                const __node = [] // BlockNode.isEmpty = true

                __node.push(
                  __utility.createNode(
                    'div',
                    (() => {
                      const __attributeNode = {}

                      __utility.addAttribute('id', 'footer', __attributeNode)

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

                            __node.push(
                              ...[
                                __utility.convertToNode('some footer content')
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
