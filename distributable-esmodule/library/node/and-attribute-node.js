
import Node from '../node.js';

class AndAttributeNode extends Node {

  constructor(andAttribute, option) {
    super(andAttribute, option);
    this._andAttribute = andAttribute;
  }

  getSource() {
    return `__utility.addAndAttribute(${this._andAttribute.val}, __attributeNode)`;
  }}



export default AndAttributeNode;
//# sourceMappingURL=and-attribute-node.js.map