"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _node = _interopRequireDefault(require("../node.cjs"));

var _unsupportedAttributeTransformError = require("../error/unsupported-attribute-transform-error.cjs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AttributeNode extends _node.default {
  constructor(attribute, option) {
    super(attribute, option);
    this._attribute = attribute;
  }

  getSource() {
    if (this._attribute.mustEscape) {
      throw new _unsupportedAttributeTransformError.UnsupportedAttributeTransformError(this._attribute);
    } else {
      return `__addAttribute('${this._attribute.name}', ${this._attribute.val}, __attributeNode)`;
    }
  }
  /* c8 ignore next 15 */


  static __addAttribute(name, value, attributeNode) {
    if (typeof value === 'boolean' && value === false) {// do nothing
    } else {
      if ((value = __getAttributeValue(name, value, attributeNode[name])) !== undefined) {
        // eslint-disable-line no-undef
        // attribute values are always not escaped and then escaped by the virtualization process
        attributeNode[name] = value; // eslint-disable-line no-undef
      }
    }
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
          value = Object.keys(value).filter(key => value[key]).join(' ');
          break;

        case 'STYLE':
          value = Object.keys(value).map(key => `${key}:${value[key]};`).join('');
          break;
      }
    }

    return value === '' ? undefined : value;
  }

}

var _default = AttributeNode;
exports.default = _default;
//# sourceMappingURL=attribute-node.cjs.map