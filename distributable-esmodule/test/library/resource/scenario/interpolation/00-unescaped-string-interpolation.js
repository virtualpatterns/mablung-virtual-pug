// Powered by @virtualpatterns/mablung-virtual-pug v0.0.1-12
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
    var title = "On Dogs: Man's Best Friend"
    var author = 'enlore'
    var theGreat = '<span>escape!</span>'
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
    __node.push(
      __createNode(
        'p',
        {},
        (() => {
          const __node = []
          __node.push(
            ...[__option.convertToNode('Written with love by ')].flat()
          )
          {
            let value = author
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
        'p',
        {},
        (() => {
          const __node = []
          __node.push(...[__option.convertToNode('This will be safe: ')].flat())
          {
            let value = theGreat
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
