"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _pugFilters = _interopRequireDefault(require("pug-filters"));

var _node = _interopRequireDefault(require("../node.cjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class FilterNode extends _node.default {
  constructor(node, option) {
    super(node, option);
  }

  async getSource() {
    _pugFilters.default.handleFilters(this._node);

    let node = await _node.default.createNode(this._node, this._option);
    let source = await node.getSource();
    return source;
  }

}

var _default = FilterNode;
exports.default = _default;
//# sourceMappingURL=filter-node.cjs.map