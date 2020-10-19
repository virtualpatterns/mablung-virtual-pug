import Escape from 'jsesc';

import Node from '../node.js';

class TextNode extends Node {

  constructor(node, option) {
    super(node, option);
  }

  getSource() {

    if (this._node.val === '') {
      return '__node.push(...[__utility.convertToNode(\' \')].flat())';
    } else {
      return `__node.push(...[__utility.convertToNode('${Escape(this._node.val)}')].flat())`;
    }

  }}



export default TextNode;
//# sourceMappingURL=text-node.js.map