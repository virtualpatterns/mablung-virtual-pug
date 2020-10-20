
import Node from '../node.js'

import { UnsupportedAttributeTransformError } from '../error/unsupported-attribute-transform-error.js'

class AttributeNode extends Node {

  constructor(attribute, option) {
    super(attribute, option)
    this._attribute = attribute
  }

  getSource() {

    if (this._attribute.mustEscape) {
      throw new UnsupportedAttributeTransformError(this._attribute)
    } else {
      return `__utility.addAttribute('${this._attribute.name}', ${this._attribute.val}, __attributeNode)`
    }

  }

}

export default AttributeNode