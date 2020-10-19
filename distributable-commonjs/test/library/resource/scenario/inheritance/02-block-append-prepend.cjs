'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = _default

var _mablungVirtualPug = require('@virtualpatterns/mablung-virtual-pug')

// Created by @virtualpatterns/mablung-virtual-pug v0.0.1-13
// FilePath = 'distributable-commonjs/library/transform.cjs'
// Path = 'distributable-commonjs/test/library/resource/scenario/inheritance/02-block-append-prepend.pug'
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
                    'script',
                    (() => {
                      const __attributeNode = {}

                      __utility.addAttribute(
                        'src',
                        '/vendor/jquery.js',
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
                        '/vendor/caustic.js',
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
