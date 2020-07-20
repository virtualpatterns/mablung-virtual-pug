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

const ConvertToVirtualNode = (0, _htmlToVdom.default)({
  VNode: _vnode.default,
  VText: _vtext.default
})

function __getNode(__local = {}, __option = {}) {
  function __forEach(value, fn) {
    if (Array.isArray(value)) {
      value.forEach(fn)
      return value.length
    } else {
      let entry = Object.entries(value)
      entry.forEach(([name, value]) => fn(value, name))
      return entry.length
    }
  }

  function __addAndAttribute(object, attributeNode) {
    Object.entries(object).forEach(([name, value]) =>
      __addAttribute(name, value, attributeNode)
    ) // eslint-disable-line no-undef
  }

  function __getAttributeValue(name, value, currentValue) {
    if (typeof value === 'boolean') {
      value = value ? name : false
    } else if (typeof value === 'string') {
      value = currentValue ? `${currentValue} ${value}` : value
    } else if (Array.isArray(value)) {
      value = currentValue
        ? `${currentValue} ${value.join(' ')}`
        : value.join(' ')
    } else {
      switch (name.toUpperCase()) {
        case 'CLASS':
          value = Object.keys(value)
            .filter((key) => value[key])
            .join(' ')
          break

        case 'STYLE':
          value = Object.keys(value)
            .map((key) => `${key}:${value[key]};`)
            .join('')
          break
      }
    }

    return value === '' ? undefined : value
  }

  function __addAttribute(name, value, attributeNode) {
    if (typeof value === 'boolean' && value === false) {
      // do nothing
    } else {
      if (
        (value = __getAttributeValue(name, value, attributeNode[name])) !==
        undefined
      ) {
        // eslint-disable-line no-undef
        // attribute values are always not escaped and then escaped by the virtualization process
        attributeNode[name] = value // eslint-disable-line no-undef
      }
    }
  }

  function __getNode(__option = {}) {
    const __node = []

    __node.push(
      __option.createNode(
        'p',
        {},
        (() => {
          const __node = []

          __node.push(
            ...[__option.convertToNode('<strong>BOLD TEXT</strong>')].flat()
          )

          return __node
        })()
      )
    )

    __node.push(
      __option.createNode(
        'p',
        {},
        (() => {
          const __node = []

          __node.push(
            ...[
              __option.convertToNode('In the midst of a large amount of plain')
            ].flat()
          )

          __node.push(...[__option.convertToNode('\n')].flat())

          __node.push(
            ...[__option.convertToNode('text, suddenly a wild ')].flat()
          )

          __node.push(...[__option.convertToNode('<em>Markdown</em>')].flat())

          __node.push(...[__option.convertToNode(' ')].flat())

          __node.push(...[__option.convertToNode('\n')].flat())

          __node.push(...[__option.convertToNode('appeared.')].flat())

          return __node
        })()
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
