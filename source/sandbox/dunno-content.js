// Created by @virtualpatterns/mablung-virtual-pug v0.0.1-13
// FilePath = 'distributable-esmodule/library/transform.js'
// Path = 'source/sandbox/dunno-content.pug'
import _ConvertToVirtualNode from 'html-to-vdom'
import CreateVirtualNode from 'virtual-dom/h.js'
import VirtualNode from 'virtual-dom/vnode/vnode.js'
import VirtualText from 'virtual-dom/vnode/vtext.js'
import { Utility } from '@virtualpatterns/mablung-source-map-support'
const ConvertToVirtualNode = _ConvertToVirtualNode({
  'VNode': VirtualNode,
  'VText': VirtualText
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

    return createNodeFn(name, { 'attributes': property }, childNode)
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
            ...[__option.convertToNode("'This is a test' they tell me.")].flat()
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
export default function (
  __local = {},
  __option = {
    'createNode': CreateVirtualNode,
    'convertToNode': ConvertToVirtualNode,
    'utility': Utility
  }
) {
  return __getNode(__local, __option)
}
