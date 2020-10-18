
import BlockNode from './block-node.js'
import Node from '../node.js'

class EachNode extends Node {

  constructor(node, option) {
    super(node, option)
  }

  async getSource() {

    let source = null

    let blockNode = new BlockNode(this._node.block, this._option)
    let blockSource = blockNode.isEmpty ? '' : await blockNode.getSource()

    EachNode.__forEach.isCalled = true
    
    source =  ` __forEach(${this._node.obj}, (${this._node.val}${this._node.key ? `, ${this._node.key}` : ''}) => { 
                  ${blockSource}
                })`

    if (this._node.alternate) {

      let alternateNode = new BlockNode(this._node.alternate, this._option)
      let alternateSource = alternateNode.isEmpty ? '' : await alternateNode.getSource()
  
      source =  ` if (${source} <= 0) {
                    ${alternateSource}
                  }`

    }

    return source

  }

  /* c8 ignore next 17 */
  static __forEach(value, fn) {
                
    if (Array.isArray(value)) {

      value.forEach(fn)
      return value.length

    } else {

      let entry = Object.entries(value)

      entry.forEach(([ name, value ]) => fn(value, name))
      return entry.length

    }

  }

}

export default EachNode