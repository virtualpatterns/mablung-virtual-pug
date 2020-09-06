
import BlockAttributeNode from './block-attribute-node.js'
import BlockNode from './block-node.js'
import Node from '../node.js'

import { UnsupportedTagTransformError } from '../error/unsupported-tag-transform-error.js'

class TagNode extends Node {

  constructor(node, option) {
    super(node, option)
  }

  async getSource() {

    if (this._node.selfClosing) {
      throw new UnsupportedTagTransformError(this._node)
    } else {

      let blockAttributeNode = new BlockAttributeNode(this._node, this._option)

      let blockAttributeSource = null
      blockAttributeSource = await blockAttributeNode.getSource()
      blockAttributeSource = blockAttributeNode.isEmpty ? 
        '{}' : 
        `(() => { 
           const __attributeNode = {}
           ${blockAttributeSource}
           return __attributeNode
         })()`

      let blockNode = new BlockNode(this._node.block, this._option)

      let blockSource = null
      blockSource = await blockNode.getSource()
      blockSource = blockNode.isEmpty ? 
        '[]' : 
        `(() => { 
           const __node = []
           ${blockSource}
           return __node
         })()`

      return  `__node.push(__createNode('${this._node.name}', ${blockAttributeSource}, ${blockSource}, __option.createNode))`

    }

  }

  /* c8 ignore next 9 */
  static __createNode(name, property, childNode, createNodeFn) {

    name = __getNodeName(name) // eslint-disable-line no-undef
    property = __getNodeProperty(property) // eslint-disable-line no-undef
    childNode = __getChildNode(childNode) // eslint-disable-line no-undef

    return createNodeFn(name, property, childNode)

  }

  /* c8 ignore next 3 */
  static __getNodeName(name) {
    return name
  }

  /* c8 ignore next 17 */
  static __getNodeProperty(property) {

    let map = { 'CLASS': 'className' }
    let entry = Object.entries(property)

    entry
      .sort(([ leftName ], [ rightName ]) => leftName.localeCompare(rightName))
      .forEach(([ name, value ]) => {

        if (name.toUpperCase() in map) {
          delete property[name]
          property[map[name] || name] = value
        }

      })

    return property

  }

  /* c8 ignore next 3 */
  static __getChildNode(node) {
    return node
  }

}

export default TagNode