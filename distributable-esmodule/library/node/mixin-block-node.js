
import Node from '../node.js';

class MixinBlockNode extends Node {

  constructor(node, option) {
    super(node, option);
  }

  getSource() {
    return '__node.push(...block)';
  }}



export default MixinBlockNode;
//# sourceMappingURL=mixin-block-node.js.map