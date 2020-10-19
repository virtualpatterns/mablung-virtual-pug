'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = _default

var _mablungVirtualPug = require('@virtualpatterns/mablung-virtual-pug')

// Created by @virtualpatterns/mablung-virtual-pug v0.0.1-13
// FilePath = 'distributable-commonjs/library/transform.cjs'
// Path = 'distributable-commonjs/test/library/resource/scenario/text/01-literal-html.skip.pug'
function __getNode(__local = {}, __utility = {}) {
  function __getNode(__utility = {}) {
    const __node = []

    __node.push(...[__utility.convertToNode('<html>')].flat())

    __node.push(
      __utility.createNode(
        'body',
        {},
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
                    __utility.convertToNode(
                      'Indenting the body tag here would make no difference.'
                    )
                  ].flat()
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
                      "HTML itself isn't whitespace-sensitive."
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

    __node.push(...[__utility.convertToNode('</html>')].flat())

    return __node
  }

  return __getNode(__utility)
}

function _default(__local = {}, __utility = _mablungVirtualPug.Utility) {
  return __getNode(__local, __utility)
}
