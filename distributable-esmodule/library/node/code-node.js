
import BlockNode from './block-node.js';
import Node from '../node.js';

import { UnsupportedCodeTransformError } from '../error/unsupported-code-transform-error.js';

class CodeNode extends Node {

  constructor(node, option) {
    super(node, option);
  }

  async getSource() {

    if (this._node.buffer) {

      if (this._node.mustEscape) {
        throw new UnsupportedCodeTransformError(this._node);
      } else {

        return ` {
                    let value = ${this._node.val}
                    if (typeof value === 'string') {
                      __node.push(...[__utility.convertToNode(value)].flat())
                    } else {
                      __node.push(value)
                    }
                  }`;

      }

    } else {

      if (this._node.block) {

        let blockNode = new BlockNode(this._node.block, this._option);
        let blockSource = blockNode.isEmpty ? '' : await blockNode.getSource();

        return ` ${this._node.val} { 
                    ${blockSource}
                  }`;

      } else {
        return this._node.val;
      }

    }

  }}



export default CodeNode;
//# sourceMappingURL=code-node.js.map