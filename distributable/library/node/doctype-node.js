"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _node = _interopRequireDefault(require("../node.js"));

var _unsupportedDoctypeTransformError = require("../error/unsupported-doctype-transform-error.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class DocTypeNode extends _node.default {
  constructor(node, option) {
    super(node, option);
  }

  getSource() {
    throw new _unsupportedDoctypeTransformError.UnsupportedDocTypeTransformError(this._node);
  }

}

var _default = DocTypeNode;
exports.default = _default;
//# sourceMappingURL=doctype-node.js.map