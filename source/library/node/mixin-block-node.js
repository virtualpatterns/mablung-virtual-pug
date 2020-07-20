
import Node from '../node.js'

class MixinBlockNode extends Node {

  constructor(node, option) {
    super(node, option)
  }

  getSource() {
    // source.push('_nodes = _nodes.concat(block)')
    return '__node.push(...block)'
  }

}

export default MixinBlockNode