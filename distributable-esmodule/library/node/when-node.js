
import BlockNode from './block-node.js';
import Node from '../node.js';

class WhenNode extends Node {

  constructor(node, option) {
    super(node, option);
  }

  async getSource() {

    // if (node.expr == 'default') {
    //   source.push(`${node.expr}:`)
    //   this.processBlock(node.block, source)
    // } else {

    //   source.push(`case ${node.expr}:`)

    //   if (node.block) {

    //     if (node.block.nodes.length == 1 &&
    //         node.block.nodes[0].type.toUpperCase() == 'CODE' &&
    //         node.block.nodes[0].val == 'break') {
    //       // OK
    //     } else {
    //       this.processBlock(node.block, source)
    //     }

    //     source.push('break')

    //   }

    // }

    if (this._node.block) {

      let blockNode = new BlockNode(this._node.block, this._option);
      let blockSource = blockNode.isEmpty ? '' : await blockNode.getSource();

      if (this._node.expr === 'default') {
        return ` default: 
                    ${blockSource}`;

      } else {

        if (this._node.block.nodes.length === 1 &&
        this._node.block.nodes[0].type.toUpperCase() === 'CODE' &&
        this._node.block.nodes[0].val === 'break') {
          return ` case ${this._node.expr}: 
                      break`;
        } else {
          return ` case ${this._node.expr}: 
                      ${blockSource}
                      break`;
        }


      }

    } else {
      return `case ${this._node.expr}:`;
    }

  }}



export default WhenNode;
//# sourceMappingURL=when-node.js.map