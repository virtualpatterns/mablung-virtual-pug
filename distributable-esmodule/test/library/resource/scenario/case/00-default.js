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
    var friends = 10
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
      case 1:
        __node.push(
          __createNode(
            'p',
            {},
            (() => {
              const __node = []
              __node.push(
                ...[__option.convertToNode('you have a friend')].flat()
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
  return __getNode(__local, __option)
}
