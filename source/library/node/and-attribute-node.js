
import Node from '../node.js'

class AndAttributeNode extends Node {

  constructor(andAttribute, option) {
    super(andAttribute, option)
    this._andAttribute = andAttribute
  }

  getSource() {
    return `__addAndAttribute(${this._andAttribute.val}, __attributeNode)`
  }

  /* c8 ignore next 3 */
  static __addAndAttribute(object, attributeNode) {
    Object.entries(object).forEach(([ name, value ]) => __addAttribute(name, value, attributeNode)) // eslint-disable-line no-undef
  }

}

export default AndAttributeNode