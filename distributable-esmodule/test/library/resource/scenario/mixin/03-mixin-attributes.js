// Powered by @virtualpatterns/mablung-virtual-pug v0.0.1-11
// FilePath = 'distributable-esmodule/library/transform.js'
import CreateVirtualNode from 'virtual-dom/h.js'
import _ConvertToVirtualNode from 'html-to-vdom'
import VirtualNode from 'virtual-dom/vnode/vnode.js'
import VirtualText from 'virtual-dom/vnode/vtext.js'
const ConvertToVirtualNode = _ConvertToVirtualNode({
  VNode: VirtualNode,
  VText: VirtualText
})
function __getNode(__local = {}, __option = {}) {
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

    return createNodeFn(name, { attributes: property }, childNode)
  }
  function __getNode(__option = {}) {
    const __node = []
    function __mixin__link(attribute, block, href, name) {
      const attributes = attribute
      const __node = []
      // attributes == {class: "btn"}
      // a(class!=attributes.class href!=href)!= name
      __node.push(
        __createNode(
          'a',
          (() => {
            const __attributeNode = {}
            __addAttribute('class', attributes.class, __attributeNode)
            return __attributeNode
          })(),
          (() => {
            const __node = []
            {
              let value = name
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
      return __node
    }
    __node.push(
      ...__mixin__link(
        (() => {
          const __attributeNode = {}
          __addAttribute('class', 'btn', __attributeNode)
          return __attributeNode
        })(),
        undefined,
        '/foo',
        'foo'
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
  return __getNode(__local, __option)
}