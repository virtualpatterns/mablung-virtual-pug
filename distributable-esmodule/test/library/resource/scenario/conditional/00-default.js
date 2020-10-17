import CreateVirtualNode from 'virtual-dom/h.js'
import _ConvertToVirtualNode from 'html-to-vdom'
import VirtualNode from 'virtual-dom/vnode/vnode.js'
import VirtualText from 'virtual-dom/vnode/vtext.js'
const ConvertToVirtualNode = _ConvertToVirtualNode({
  VNode: VirtualNode,
  VText: VirtualText
})
function __getNode(__local = {}, __option = {}) {
  // Powered by @virtualpatterns/mablung-virtual-pug v0.0.1-11
  // FilePath = 'distributable-esmodule/library/transform.js'

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

    return createNodeFn(name, { attributes: property }, childNode) // eslint-disable-line no-undef
  }
  function __getNode(__option = {}) {
    // Powered by @virtualpatterns/mablung-virtual-pug v0.0.1-11
    // FilePath = 'distributable-esmodule/library/transform.js'
    const __node = []
    var user = { description: 'foo bar baz' }
    var authorised = false
    __node.push(
      __createNode(
        'div',
        (() => {
          const __attributeNode = {}
          __addAttribute('id', 'user', __attributeNode)
          return __attributeNode
        })(),
        (() => {
          const __node = []
          if (user.description) {
            __node.push(
              __createNode(
                'h2',
                (() => {
                  const __attributeNode = {}
                  __addAttribute('class', 'green', __attributeNode)
                  return __attributeNode
                })(),
                (() => {
                  const __node = []
                  __node.push(...[__option.convertToNode('Description')].flat())
                  return __node
                })(),
                __option.createNode
              )
            )
            __node.push(
              __createNode(
                'p',
                (() => {
                  const __attributeNode = {}
                  __addAttribute('class', 'description', __attributeNode)
                  return __attributeNode
                })(),
                (() => {
                  const __node = []
                  {
                    let value = user.description
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
          } else {
            if (authorised) {
              __node.push(
                __createNode(
                  'h2',
                  (() => {
                    const __attributeNode = {}
                    __addAttribute('class', 'blue', __attributeNode)
                    return __attributeNode
                  })(),
                  (() => {
                    const __node = []
                    __node.push(
                      ...[__option.convertToNode('Description')].flat()
                    )
                    return __node
                  })(),
                  __option.createNode
                )
              )
              __node.push(
                __createNode(
                  'p',
                  (() => {
                    const __attributeNode = {}
                    __addAttribute('class', 'description', __attributeNode)
                    return __attributeNode
                  })(),
                  (() => {
                    const __node = []
                    __node.push(
                      ...[
                        __option.convertToNode('User has no description,')
                      ].flat()
                    )
                    __node.push(...[__option.convertToNode('\n')].flat())
                    __node.push(
                      ...[__option.convertToNode('why not add one...')].flat()
                    )
                    return __node
                  })(),
                  __option.createNode
                )
              )
            } else {
              __node.push(
                __createNode(
                  'h2',
                  (() => {
                    const __attributeNode = {}
                    __addAttribute('class', 'red', __attributeNode)
                    return __attributeNode
                  })(),
                  (() => {
                    const __node = []
                    __node.push(
                      ...[__option.convertToNode('Description')].flat()
                    )
                    return __node
                  })(),
                  __option.createNode
                )
              )
              __node.push(
                __createNode(
                  'p',
                  (() => {
                    const __attributeNode = {}
                    __addAttribute('class', 'description', __attributeNode)
                    return __attributeNode
                  })(),
                  (() => {
                    const __node = []
                    __node.push(
                      ...[
                        __option.convertToNode('User has no description')
                      ].flat()
                    )
                    return __node
                  })(),
                  __option.createNode
                )
              )
            }
          }
          return __node
        })(),
        __option.createNode
      )
    )
    return __node
  }
  return __getNode(__option)
}
export default function (
  __local = {},
  __option = {
    createNode: CreateVirtualNode,
    convertToNode: ConvertToVirtualNode
  }
) {
  // Powered by @virtualpatterns/mablung-virtual-pug v0.0.1-11
  // FilePath = 'distributable-esmodule/library/transform.js'
  return __getNode(__local, __option)
}
