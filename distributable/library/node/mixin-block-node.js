"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _node = _interopRequireDefault(require("../node.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class MixinBlockNode extends _node.default {
  constructor(node, option) {
    super(node, option);
  }

  getSource() {
    // source.push('_nodes = _nodes.concat(block)')
    return '__node.push(...block)';
  }

}

var _default = MixinBlockNode;
exports.default = _default;
//# sourceMappingURL=mixin-block-node.js.map