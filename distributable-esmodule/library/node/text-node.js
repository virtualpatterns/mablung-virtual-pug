import Escape from 'jsesc';

import Node from '../node.js';

class TextNode extends Node {

  constructor(node, option) {
    super(node, option);
  }

  getSource() {

    if (this._node.val === '') {
      return '__node.push(...[__option.convertToNode(\' \')].flat())';
    } else {
      return `__node.push(...[__option.convertToNode('${Escape(this._node.val)}')].flat())`;
    }

  }}



export default TextNode;
//# sourceMappingURL=text-node.js.map