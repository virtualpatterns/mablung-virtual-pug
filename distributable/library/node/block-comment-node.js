"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _node = _interopRequireDefault(require("../node.js"));

var _unsupportedCommentTransformError = require("../error/unsupported-comment-transform-error.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class BlockCommentNode extends _node.default {
  constructor(node, option) {
    super(node, option);
  }

  getSource() {
    if (this._node.buffer) {
      // comment appears in html
      throw new _unsupportedCommentTransformError.UnsupportedCommentTransformError(this._node);
    } else {
      // comment appears in javascript
      return this._node.block.nodes.filter(node => node.type.toUpperCase() === 'TEXT').filter(node => node.val != '\n').map(node => `// ${node.val}`).join('\n');
    }
  }

}

var _default = BlockCommentNode;
exports.default = _default;
//# sourceMappingURL=block-comment-node.js.map