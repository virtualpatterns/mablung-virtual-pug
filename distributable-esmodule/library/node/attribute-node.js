
import Node from '../node.js';

import { UnsupportedAttributeTransformError } from '../error/unsupported-attribute-transform-error.js';

class AttributeNode extends Node {

  constructor(attribute, option) {
    super(attribute, option);
    this._attribute = attribute;
  }

  getSource() {

    if (this._attribute.mustEscape) {
      throw new UnsupportedAttributeTransformError(this._attribute);
    } else {

      AttributeNode.__addAttribute.isCalled = true;

      return `__addAttribute('${this._attribute.name}', ${this._attribute.val}, __attributeNode)`;

    }

  }

  /* c8 ignore next 15 */
  static __addAttribute(name, value, attributeNode) {

    if (typeof value === 'boolean' &&
    value === false) {
      // do nothing
    } else {

      name = __getAttributeName(name); // eslint-disable-line no-undef
      value = __getAttributeValue(name, value, attributeNode[name]); // eslint-disable-line no-undef

      if (value !== undefined) {
        attributeNode[name] = value;
      }

    }

  }

  /* c8 ignore next 9 */
  static __getAttributeName(name) {
    return name;
  }

  /* c8 ignore next 28 */
  static __getAttributeValue(name, value, currentValue) {

    if (typeof value === 'boolean') {
      value = value ? name : false;
    } else if (typeof value === 'string') {
      value = currentValue ? `${currentValue} ${value}` : value;
    } else if (Array.isArray(value)) {
      value = currentValue ? `${currentValue} ${value.join(' ')}` : value.join(' ');
    } else {

      switch (name.toUpperCase()) {
        case 'CLASS':
          value = Object.keys(value).
          filter(key => value[key]).
          join(' ');
          break;
        case 'STYLE':
          value = Object.keys(value).
          map(key => `${key}:${value[key]};`).
          join('');
          break;}


    }

    return value === '' ? undefined : value;

  }}



export default AttributeNode;
//# sourceMappingURL=attribute-node.js.map