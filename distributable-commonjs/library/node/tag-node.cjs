"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _blockAttributeNode = _interopRequireDefault(require("./block-attribute-node.cjs"));

var _blockNode = _interopRequireDefault(require("./block-node.cjs"));

var _node = _interopRequireDefault(require("../node.cjs"));

var _unsupportedTagTransformError = require("../error/unsupported-tag-transform-error.cjs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class TagNode extends _node.default {
  constructor(node, option) {
    super(node, option);
  }

  async getSource() {
    if (this._node.selfClosing) {
      throw new _unsupportedTagTransformError.UnsupportedTagTransformError(this._node);
    } else {
      let blockAttributeNode = new _blockAttributeNode.default(this._node, this._option);
      let blockAttributeSource = null;
      blockAttributeSource = await blockAttributeNode.getSource();
      blockAttributeSource = blockAttributeNode.isEmpty ? '{}' : `(() => { 
           const __attributeNode = {}
           ${blockAttributeSource}
           return __attributeNode
         })()`;
      let blockNode = new _blockNode.default(this._node.block, this._option);
      let blockSource = null;
      blockSource = await blockNode.getSource();
      blockSource = blockNode.isEmpty ? '[]' : `(() => { 
           const __node = []
           ${blockSource}
           return __node
         })()`;
      return `__node.push(__createNode('${this._node.name}', ${blockAttributeSource}, ${blockSource}, __option.createNode))`;
    }
  }
  /* c8 ignore next 9 */


  static __createNode(name, property, childNode, createNodeFn) {
    name = __getNodeName(name); // eslint-disable-line no-undef

    property = __getNodeProperty(property); // eslint-disable-line no-undef

    childNode = __getChildNode(childNode); // eslint-disable-line no-undef

    return createNodeFn(name, {
      'attributes': property
    }, childNode); // eslint-disable-line no-undef
  }
  /* c8 ignore next 3 */


  static __getNodeName(name) {
    return name;
  }
  /* c8 ignore next 17 */


  static __getNodeProperty(property) {
    let map = {}; // { 'CLASS': 'className', 'FOR': 'htmlFor', 'HTTP-EQUIV': 'httpEquiv' }

    let entry = Object.entries(property);
    entry.sort(([leftName], [rightName]) => leftName.localeCompare(rightName)).forEach(([name, value]) => {
      if (name.toUpperCase() in map) {
        delete property[name];
        property[map[name.toUpperCase()] || name] = value;
      }
    });
    return property;
  }
  /* c8 ignore next 3 */


  static __getChildNode(node) {
    return node;
  }

}

var _default = TagNode;
exports.default = _default;
//# sourceMappingURL=tag-node.cjs.map