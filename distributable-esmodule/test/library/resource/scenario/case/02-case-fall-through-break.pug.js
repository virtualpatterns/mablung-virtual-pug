import CreateVirtualNode from 'virtual-dom/h.js'
import _ConvertToVirtualNode from 'html-to-vdom'
import VirtualNode from 'virtual-dom/vnode/vnode.js'
import VirtualText from 'virtual-dom/vnode/vtext.js'
const ConvertToVirtualNode = _ConvertToVirtualNode({
  VNode: VirtualNode,
  VText: VirtualText
})
function __getNode(__local = {}, __option = {}) {
  // Powered by @virtualpatterns/mablung-virtual-pug v0.0.1-8
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
        case 'CLASS': // 'CLASS': //
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
    let map = { CLASS: 'className' }
    let entry = Object.entries(property)

    entry
      .sort(([leftName], [rightName]) => leftName.localeCompare(rightName))
      .forEach(([name, value]) => {
        if (name.toUpperCase() in map) {
          delete property[name]
          property[map[name] || name] = value
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

    return createNodeFn(name, property, childNode)
  }
  function __getNode(__option = {}) {
    // Powered by @virtualpatterns/mablung-virtual-pug v0.0.1-8
    // FilePath = 'distributable-esmodule/library/transform.js'
    const __node = []
    var friends = 0
    switch (friends) {
      case 0:
        __node.push(
          __createNode(
            'p',
            {},
            (() => {
              const __node = []
              __node.push(
                ...[__option.convertToNode('you have no friends')].flat()
              )
              return __node
            })(),
            __option.createNode
          )
        )
        break
        break
      case 1:
        __node.push(
          __createNode(
            'p',
            {},
            (() => {
              const __node = []
              __node.push(
                ...[__option.convertToNode('you have very few friends')].flat()
              )
              return __node
            })(),
            __option.createNode
          )
        )
        break
      default:
        __node.push(
          __createNode(
            'p',
            {},
            (() => {
              const __node = []
              __node.push(...[__option.convertToNode('you have ')].flat())
              {
                let value = friends
                if (typeof value === 'string') {
                  __node.push(...[__option.convertToNode(value)].flat())
                } else {
                  __node.push(value)
                }
              }
              __node.push(...[__option.convertToNode(' friends')].flat())
              return __node
            })(),
            __option.createNode
          )
        )
    }

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
  // Powered by @virtualpatterns/mablung-virtual-pug v0.0.1-8
  // FilePath = 'distributable-esmodule/library/transform.js'
  return __getNode(__local, __option)
}
