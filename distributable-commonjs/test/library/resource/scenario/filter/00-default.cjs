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
  // Powered by @virtualpatterns/mablung-virtual-pug v0.0.1-11
  // FilePath = 'distributable-commonjs/library/transform.cjs'
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

  function __getAttributeName(name) {
    return name
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
      name = __getAttributeName(name) // eslint-disable-line no-undef

      value = __getAttributeValue(name, value, attributeNode[name]) // eslint-disable-line no-undef

      if (value !== undefined) {
        attributeNode[name] = value
      }
    }
  }

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
    name = __getNodeName(name) // eslint-disable-line no-undef

    property = __getNodeProperty(property) // eslint-disable-line no-undef

    childNode = __getChildNode(childNode) // eslint-disable-line no-undef

    return createNodeFn(
      name,
      {
        attributes: property
      },
      childNode
    ) // eslint-disable-line no-undef
  }

  function __getNode(__option = {}) {
    // Powered by @virtualpatterns/mablung-virtual-pug v0.0.1-11
    // FilePath = 'distributable-commonjs/library/transform.cjs'
    const __node = []

    __node.push(
      ...[
        __option.convertToNode(
          '<h1>Markdown</h1>\n<p>Markdown document with <a href="http://links.com">http://links.com</a> and</p>\n<pre><code class="highlight-js">var codeBlocks;\n</code></pre>\n'
        )
      ].flat()
    )

    __node.push(
      __createNode(
        'script',
        {},
        (() => {
          const __node = []

          __node.push(
            ...[
              __option.convertToNode(
                "(function() {\n  console.log('This is coffee script');\n\n}).call(this);\n"
              )
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
  // Powered by @virtualpatterns/mablung-virtual-pug v0.0.1-11
  // FilePath = 'distributable-commonjs/library/transform.cjs'
  return __getNode(__local, __option)
}
