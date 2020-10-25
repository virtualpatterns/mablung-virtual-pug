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
// Path = 'distributable-commonjs/test/library/resource/scenario/include/01-plain-text.pug'
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
                    'style',
                    {},
                    (() => {
                      const __node = []

                      __node.push(
                        ...[
                          __utility.convertToNode('h1 {\n  color: red;\n}')
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
                    'script',
                    {},
                    (() => {
                      const __node = []

                      __node.push(
                        ...[
                          __utility.convertToNode(
                            "console.log('You are awesome')"
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
