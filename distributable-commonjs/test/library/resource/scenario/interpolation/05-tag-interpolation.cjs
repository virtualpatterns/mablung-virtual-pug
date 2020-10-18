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

// Powered by @virtualpatterns/mablung-virtual-pug v0.0.1-12
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
        'p',
        {},
        (() => {
          const __node = []

          __node.push(
            ...[
              __option.convertToNode(
                'This is a very long and boring paragraph that spans multiple lines.'
              )
            ].flat()
          )

          __node.push(...[__option.convertToNode('\n')].flat())

          __node.push(
            ...[
              __option.convertToNode(
                'Suddenly there is a ![strong strongly worded phrase] that cannot be'
              )
            ].flat()
          )

          __node.push(...[__option.convertToNode('\n')].flat())

          __node.push(...[__option.convertToNode('![em ignored].')].flat())

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
            ...[
              __option.convertToNode(
                "And here's an example of an interpolated tag with an attribute:"
              )
            ].flat()
          )

          __node.push(...[__option.convertToNode('\n')].flat())

          __node.push(
            ...[
              __option.convertToNode('![q(lang="es") \xA1Hola Mundo!]')
            ].flat()
          )

          return __node
        })(),
        __option.createNode
      )
    )

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
