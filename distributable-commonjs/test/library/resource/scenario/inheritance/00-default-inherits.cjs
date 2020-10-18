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
  const { title } = __local

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
      name = __getAttributeName(name) //

      value = __getAttributeValue(name, value, attributeNode[name]) //

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
        'html',
        {},
        (() => {
          const __node = []

          __node.push(
            __createNode(
              'head',
              {},
              (() => {
                const __node = []

                __node.push(
                  __createNode(
                    'title',
                    {},
                    (() => {
                      const __node = []

                      __node.push(
                        ...[__option.convertToNode('My Site - ')].flat()
                      )

                      {
                        let value = title

                        if (typeof value === 'string') {
                          __node.push(...[__option.convertToNode(value)].flat())
                        } else {
                          __node.push(value)
                        }
                      }
                      return __node
                    })(),
                    __option.createNode
                  )
                )

                __node.push(
                  __createNode(
                    'script',
                    (() => {
                      const __attributeNode = {}

                      __addAttribute('src', '/jquery.js', __attributeNode)

                      return __attributeNode
                    })(),
                    [],
                    __option.createNode
                  )
                )

                __node.push(
                  __createNode(
                    'script',
                    (() => {
                      const __attributeNode = {}

                      __addAttribute('src', '/pets.js', __attributeNode)

                      return __attributeNode
                    })(),
                    [],
                    __option.createNode
                  )
                )

                return __node
              })(),
              __option.createNode
            )
          )

          __node.push(
            __createNode(
              'body',
              {},
              (() => {
                const __node = []

                __node.push(
                  __createNode(
                    'h1',
                    {},
                    (() => {
                      const __node = []
                      {
                        let value = title

                        if (typeof value === 'string') {
                          __node.push(...[__option.convertToNode(value)].flat())
                        } else {
                          __node.push(value)
                        }
                      }
                      return __node
                    })(),
                    __option.createNode
                  )
                )

                var pets = ['cat', 'dog']

                __forEach(pets, (petName) => {
                  __node.push(
                    __createNode(
                      'p',
                      {},
                      (() => {
                        const __node = []
                        {
                          let value = petName

                          if (typeof value === 'string') {
                            __node.push(
                              ...[__option.convertToNode(value)].flat()
                            )
                          } else {
                            __node.push(value)
                          }
                        }
                        return __node
                      })(),
                      __option.createNode
                    )
                  )
                })

                __node.push(
                  __createNode(
                    'div',
                    (() => {
                      const __attributeNode = {}

                      __addAttribute('id', 'footer', __attributeNode)

                      return __attributeNode
                    })(),
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
                                __option.convertToNode('some footer content')
                              ].flat()
                            )

                            return __node
                          })(),
                          __option.createNode
                        )
                      )

                      return __node
                    })(),
                    __option.createNode
                  )
                )

                return __node
              })(),
              __option.createNode
            )
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