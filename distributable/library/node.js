"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var ChangeCase = _interopRequireWildcard(require("change-case"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const {
  paramCase: ParameterCase
} = ChangeCase;

class Node {
  constructor(node, option) {
    this._node = node;
    this._option = option;
  }

  async getSource() {}

  static async createNode(node, option) {
    let nodeClass = null;
    nodeClass = await Promise.resolve(`./node/${ParameterCase(node.type)}-node.js`).then(s => _interopRequireWildcard(require(s)));
    nodeClass = nodeClass.default || nodeClass;
    return new nodeClass(node, option);
  } // static __escape(value) {
  //   if (typeof value === 'string') {
  //     value = value.replace(/"/gi, '&quot;')
  //     value = value.replace(/'/gi, '&#39;')
  //     value = value.replace(/&/gi, '&amp;')
  //     value = value.replace(/</gi, '&lt;')
  //     value = value.replace(/>/gi, '&gt;')
  //   }
  //   return value
  // }


}

var _default = Node;
exports.default = _default;
//# sourceMappingURL=node.js.map