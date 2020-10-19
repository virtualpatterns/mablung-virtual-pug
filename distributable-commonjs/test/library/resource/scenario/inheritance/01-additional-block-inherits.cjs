'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = _default

var _mablungVirtualPug = require('@virtualpatterns/mablung-virtual-pug')

// Created by @virtualpatterns/mablung-virtual-pug v0.0.1-13
// FilePath = 'distributable-commonjs/library/transform.cjs'
// Path = 'distributable-commonjs/test/library/resource/scenario/inheritance/01-additional-block-inherits.pug'
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
                const __node = []

                __node.push(
                  __utility.createNode(
                    'div',
                    (() => {
                      const __attributeNode = {}

                      __utility.addAttribute(
                        'class',
                        'sidebar',
                        __attributeNode
                      )

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
                              ...[__utility.convertToNode('nothing')].flat()
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
                    'div',
                    (() => {
                      const __attributeNode = {}

                      __utility.addAttribute(
                        'class',
                        'primary',
                        __attributeNode
                      )

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
                              ...[__utility.convertToNode('nothing')].flat()
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

function _default(__local = {}, __utility = _mablungVirtualPug.Utility) {
  return __getNode(__local, __utility)
}
