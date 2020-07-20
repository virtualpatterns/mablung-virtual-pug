"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _blockWhenNode = _interopRequireDefault(require("./block-when-node.js"));

var _node = _interopRequireDefault(require("../node.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CaseNode extends _node.default {
  constructor(node, option) {
    super(node, option);
  }

  async getSource() {
    // source.push(`switch(${node.expr}) {`)
    // node.block.nodes.forEach((whenNode) => this.processWhen(whenNode, source))
    // source.push('}')
    let blockWhenNode = new _blockWhenNode.default(this._node.block, this._option);
    let blockWhenSource = null;
    blockWhenSource = await blockWhenNode.getSource();
    blockWhenSource = blockWhenNode.isEmpty ? ' {}' : ` { 
          ${blockWhenSource}
        }`;
    return ` switch(${this._node.expr}) ${blockWhenSource}`;
  }

}

var _default = CaseNode;
exports.default = _default;
//# sourceMappingURL=case-node.js.map