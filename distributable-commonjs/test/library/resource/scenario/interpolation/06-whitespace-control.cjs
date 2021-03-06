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
// Path = 'distributable-commonjs/test/library/resource/scenario/interpolation/06-whitespace-control.pug'
function __getNode(__local = {}, __utility = {}) {
  function __getNode(__utility = {}) {
    const __node = []

    __node.push(
      __utility.createNode(
        'div',
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
                      "If I don't write the paragraph with tag interpolation, tags like"
                    )
                  ].flat()
                )

                __node.push(
                  __utility.createNode(
                    'strong',
                    {},
                    (() => {
                      const __node = []

                      __node.push(...[__utility.convertToNode('strong')].flat())

                      return __node
                    })()
                  )
                )

                __node.push(...[__utility.convertToNode('and')].flat())

                __node.push(
                  __utility.createNode(
                    'em',
                    {},
                    (() => {
                      const __node = []

                      __node.push(...[__utility.convertToNode('em')].flat())

                      return __node
                    })()
                  )
                )

                __node.push(
                  ...[
                    __utility.convertToNode('might produce unexpected results.')
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
                  ...[__utility.convertToNode('If I do, whitespace is ')].flat()
                )

                __node.push(
                  __utility.createNode(
                    'strong',
                    {},
                    (() => {
                      const __node = []

                      __node.push(
                        ...[__utility.convertToNode('respected')].flat()
                      )

                      return __node
                    })()
                  )
                )

                __node.push(...[__utility.convertToNode(' and ')].flat())

                __node.push(
                  __utility.createNode(
                    'em',
                    {},
                    (() => {
                      const __node = []

                      __node.push(
                        ...[__utility.convertToNode('everybody')].flat()
                      )

                      return __node
                    })()
                  )
                )

                __node.push(...[__utility.convertToNode(' is happy.')].flat())

                return __node
              })()
            )
          )

          return __node
        })()
      )
    ) // <div><p>If I don't write the paragraph with tag interpolation, tags like<strong>strong</strong>and<em>em</em>might produce unexpected results.</p><p>If I do, whitespace is <strong>respected</strong> and <em>everybody</em> is happy.</p></div>

    return __node
  }

  return __getNode(__utility)
}

function _default(__local = {}, __utility = _utility.default) {
  return __getNode(__local, __utility)
}
