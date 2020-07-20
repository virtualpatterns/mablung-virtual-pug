
import BlockNode from './block-node.js'
import Node from '../node.js'

class ConditionalNode extends Node {

  constructor(node, option) {
    super(node, option)
  }

  async getSource() {

    // source.push(`if ( ${node.test} ) {`)
    // if (node.consequent) {
    //   this.processBlock(node.consequent, source)
    // }
    // source.push('}')
  
    // if (node.alternate) {
    //   source.push('else {')
    //   this.processNode(node.alternate, source)
    //   source.push('}')
    // }

    let source = null

    let blockNode = new BlockNode(this._node.consequent, this._option)
    let blockSource = blockNode.isEmpty ? '' : await blockNode.getSource()

    source =  ` if (${this._node.test}) {
                  ${blockSource}
                }`

    if (this._node.alternate) {

      let alternateNode = await Node.createNode(this._node.alternate, this._option)
      let alternateSource = await alternateNode.getSource()

      source =  ` ${source} else {
                    ${alternateSource} 
                  }`

    }

    return source
  
  }

}

export default ConditionalNode
