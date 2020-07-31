"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _node = _interopRequireDefault(require("../node.cjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AndAttributeNode extends _node.default {
  constructor(andAttribute, option) {
    super(andAttribute, option);
    this._andAttribute = andAttribute;
  }

  getSource() {
    return `__addAndAttribute(${this._andAttribute.val}, __attributeNode)`;
  }
  /* c8 ignore next 3 */


  static __addAndAttribute(object, attributeNode) {
    Object.entries(object).forEach(([name, value]) => __addAttribute(name, value, attributeNode)); // eslint-disable-line no-undef
  }

}

var _default = AndAttributeNode;
exports.default = _default;
//# sourceMappingURL=and-attribute-node.cjs.map