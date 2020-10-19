'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = _default

var _mablungVirtualPug = require('@virtualpatterns/mablung-virtual-pug')

// Created by @virtualpatterns/mablung-virtual-pug v0.0.1-13
// FilePath = 'distributable-commonjs/library/transform.cjs'
// Path = 'distributable-commonjs/test/library/resource/scenario/include/00-default.pug'
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
                        ...[__utility.convertToNode('My Site')].flat()
                      )

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

          __node.push(
            __utility.createNode(
              'body',
              {},
              (() => {
                const __node = []

                __node.push(
                  __utility.createNode(
                    'h1',
                    {},
                    (() => {
                      const __node = []

                      __node.push(
                        ...[__utility.convertToNode('My Site')].flat()
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
                        ...[
                          __utility.convertToNode(
                            'Welcome to my super lame site.'
                          )
                        ].flat()
                      )

                      return __node
                    })()
                  )
                )

                __node.push(
                  __utility.createNode(
                    'footer',
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
                                __utility.convertToNode('Copyright (c) foobar')
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
