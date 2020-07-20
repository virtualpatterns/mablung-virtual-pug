"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _blockNode = _interopRequireDefault(require("./block-node.js"));

var _node = _interopRequireDefault(require("../node.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ConditionalNode extends _node.default {
  constructor(node, option) {
    super(node, option);
  }

  async getSource() {
    // source.push(`if ( ${node.test} ) {`)
    // if (node.consequent) {
    //   this.processBlock(node.consequent, source)
    // }
    // source.push('}')
    // if (node.alternate) {
    //   source.push('else {')
    //   this.processNode(node.alternate, source)
    //   source.push('}')
    // }
    let source = null;
    let blockNode = new _blockNode.default(this._node.consequent, this._option);
    let blockSource = blockNode.isEmpty ? '' : await blockNode.getSource();
    source = ` if (${this._node.test}) {
                  ${blockSource}
                }`;

    if (this._node.alternate) {
      let alternateNode = await _node.default.createNode(this._node.alternate, this._option);
      let alternateSource = await alternateNode.getSource();
      source = ` ${source} else {
                    ${alternateSource} 
                  }`;
    }

    return source;
  }

}

var _default = ConditionalNode;
exports.default = _default;
//# sourceMappingURL=conditional-node.js.map