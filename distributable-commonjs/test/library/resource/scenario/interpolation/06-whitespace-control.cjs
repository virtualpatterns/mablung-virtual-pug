'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = _default

var _h = _interopRequireDefault(require('virtual-dom/h.js'))

var _htmlToVdom = _interopRequireDefault(require('html-to-vdom'))

var _vnode = _interopRequireDefault(require('virtual-dom/vnode/vnode.js'))

var _vtext = _interopRequireDefault(require('virtual-dom/vnode/vtext.js'))

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

// Powered by @virtualpatterns/mablung-virtual-pug v0.0.1-11
// FilePath = 'distributable-commonjs/library/transform.cjs'
const ConvertToVirtualNode = (0, _htmlToVdom.default)({
  VNode: _vnode.default,
  VText: _vtext.default
})

function __getNode(__local = {}, __option = {}) {
  function __getNodeName(name) {
    return name
  }

  function __getNodeProperty(property) {
    let map = {} // { 'CLASS': 'className', 'FOR': 'htmlFor', 'HTTP-EQUIV': 'httpEquiv' }

    let entry = Object.entries(property)
    entry
      .sort(([leftName], [rightName]) => leftName.localeCompare(rightName))
      .forEach(([name, value]) => {
        if (name.toUpperCase() in map) {
          delete property[name]
          property[map[name.toUpperCase()] || name] = value
        }
      })
    return property
  }

  function __getChildNode(node) {
    return node
  }

  function __createNode(name, property, childNode, createNodeFn) {
    name = __getNodeName(name) //

    property = __getNodeProperty(property) //

    childNode = __getChildNode(childNode) //

    return createNodeFn(
      name,
      {
        attributes: property
      },
      childNode
    )
  }

  function __getNode(__option = {}) {
    const __node = []

    __node.push(
      __createNode(
        'div',
        {},
        (() => {
          const __node = []

          __node.push(
            __createNode(
              'p',
              {},
              (() => {
                const __node = []

                __node.push(
                  ...[
                    __option.convertToNode(
                      "If I don't write the paragraph with tag interpolation, tags like"
                    )
                  ].flat()
                )

                __node.push(
                  __createNode(
                    'strong',
                    {},
                    (() => {
                      const __node = []

                      __node.push(...[__option.convertToNode('strong')].flat())

                      return __node
                    })(),
                    __option.createNode
                  )
                )

                __node.push(...[__option.convertToNode('and')].flat())

                __node.push(
                  __createNode(
                    'em',
                    {},
                    (() => {
                      const __node = []

                      __node.push(...[__option.convertToNode('em')].flat())

                      return __node
                    })(),
                    __option.createNode
                  )
                )

                __node.push(
                  ...[
                    __option.convertToNode('might produce unexpected results.')
                  ].flat()
                )

                return __node
              })(),
              __option.createNode
            )
          )

          __node.push(
            __createNode(
              'p',
              {},
              (() => {
                const __node = []

                __node.push(
                  ...[__option.convertToNode('If I do, whitespace is ')].flat()
                )

                __node.push(
                  __createNode(
                    'strong',
                    {},
                    (() => {
                      const __node = []

                      __node.push(
                        ...[__option.convertToNode('respected')].flat()
                      )

                      return __node
                    })(),
                    __option.createNode
                  )
                )

                __node.push(...[__option.convertToNode(' and ')].flat())

                __node.push(
                  __createNode(
                    'em',
                    {},
                    (() => {
                      const __node = []

                      __node.push(
                        ...[__option.convertToNode('everybody')].flat()
                      )

                      return __node
                    })(),
                    __option.createNode
                  )
                )

                __node.push(...[__option.convertToNode(' is happy.')].flat())

                return __node
              })(),
              __option.createNode
            )
          )

          return __node
        })(),
        __option.createNode
      )
    ) // <div><p>If I don't write the paragraph with tag interpolation, tags like<strong>strong</strong>and<em>em</em>might produce unexpected results.</p><p>If I do, whitespace is <strong>respected</strong> and <em>everybody</em> is happy.</p></div>

    return __node
  }

  return __getNode(__option)
}

function _default(
  __local = {},
  __option = {
    createNode: _h.default,
    convertToNode: ConvertToVirtualNode
  }
) {
  return __getNode(__local, __option)
}
