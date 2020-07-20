"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsesc = _interopRequireDefault(require("jsesc"));

var _node = _interopRequireDefault(require("../node.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class TextNode extends _node.default {
  constructor(node, option) {
    super(node, option);
  }

  getSource() {
    if (this._node.val === '') {
      return '__node.push(...[__option.convertToNode(\' \')].flat())';
    } else {
      return `__node.push(...[__option.convertToNode('${(0, _jsesc.default)(this._node.val)}')].flat())`;
    }
  }

}

var _default = TextNode;
exports.default = _default;
//# sourceMappingURL=text-node.js.map