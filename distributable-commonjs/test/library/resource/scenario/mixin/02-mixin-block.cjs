'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = _default

var _mablungVirtualPug = require('@virtualpatterns/mablung-virtual-pug')

// Created by @virtualpatterns/mablung-virtual-pug v0.0.1-13
// FilePath = 'distributable-commonjs/library/transform.cjs'
// Path = 'distributable-commonjs/test/library/resource/scenario/mixin/02-mixin-block.pug'
function __getNode(__local = {}, __utility = {}) {
  function __getNode(__utility = {}) {
    const __node = []

    function __mixin__article(attribute, block, title) {
      const attributes = attribute
      const __node = []

      __node.push(
        __utility.createNode(
          'div',
          (() => {
            const __attributeNode = {}

            __utility.addAttribute('class', 'article', __attributeNode)

            return __attributeNode
          })(),
          (() => {
            const __node = []

            __node.push(
              __utility.createNode(
                'div',
                (() => {
                  const __attributeNode = {}

                  __utility.addAttribute(
                    'class',
                    'article-wrapper',
                    __attributeNode
                  )

                  return __attributeNode
                })(),
                (() => {
                  const __node = []

                  __node.push(
                    __utility.createNode(
                      'h1',
                      {},
                      (() => {
                        const __node = []
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

                  if (block) {
                    __node.push(...block)
                  } else {
                    __node.push(
                      __utility.createNode(
                        'p',
                        {},
                        (() => {
                          const __node = []

                          __node.push(
                            ...[
                              __utility.convertToNode('No content provided')
                            ].flat()
                          )

                          return __node
                        })()
                      )
                    )
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

    __node.push(...__mixin__article(undefined, undefined, 'Hello world'))

    __node.push(
      ...__mixin__article(
        undefined,
        (() => {
          const __node = []

          __node.push(
            __utility.createNode(
              'p',
              {},
              (() => {
                const __node = []

                __node.push(...[__utility.convertToNode('This is my')].flat())

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
                  ...[__utility.convertToNode('Amazing article')].flat()
                )

                return __node
              })()
            )
          )

          return __node
        })(),
        'Hello world'
      )
    )

    return __node
  }

  return __getNode(__utility)
}

function _default(__local = {}, __utility = _mablungVirtualPug.Utility) {
  return __getNode(__local, __utility)
}
