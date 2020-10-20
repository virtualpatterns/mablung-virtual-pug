
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

      return  `__node.push(__utility.createNode('${this._node.name}', ${blockAttributeSource}, ${blockSource}))`

    }

  }

}

export default TagNode