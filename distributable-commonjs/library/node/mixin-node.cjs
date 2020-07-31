"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toJsIdentifier = _interopRequireDefault(require("to-js-identifier"));

var _blockAttributeNode = _interopRequireDefault(require("./block-attribute-node.cjs"));

var _blockNode = _interopRequireDefault(require("./block-node.cjs"));

var _node = _interopRequireDefault(require("../node.cjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class MixinNode extends _node.default {
  constructor(node, option) {
    super(node, option);
  }

  async getSource() {
    let source = null;

    if (this._node.call) {
      // let attributesSource = []
      // this.processAttributes(node, attributesSource, false)
      // let blockSource = []
      // this.processNodes(node, blockSource)
      // source.push('_nodes = _nodes.concat(')
      // source.push(`_mixin_${Identifier(node.name)}(`)
      // source.push(`${attributesSource.join('\n')}, `)
      // source.push(`${blockSource.join('\n')}`)
      // source.push(`${node.args ? `, ${node.args}` : ''}))`)
      let blockAttributeNode = new _blockAttributeNode.default(this._node, this._option);
      let blockAttributeSource = null;
      blockAttributeSource = await blockAttributeNode.getSource();
      blockAttributeSource = blockAttributeNode.isEmpty ? undefined : `(() => { 
           const __attributeNode = {}
           ${blockAttributeSource}
           return __attributeNode
         })()`;
      let blockNode = null;
      let blockSource = null;

      if (this._node.block) {
        blockNode = new _blockNode.default(this._node.block, this._option);
        blockSource = await blockNode.getSource();
        blockSource = blockNode.isEmpty ? '[]' : `(() => { 
            const __node = []
            ${blockSource}
            return __node
          })()`;
      } else {
        blockSource = undefined;
      }

      source = ` __node.push(
                    ...
                    __mixin__${(0, _toJsIdentifier.default)(this._node.name)}(
                      ${blockAttributeSource},
                      ${blockSource}
                      ${this._node.args ? `, ${this._node.args}` : ''}
                    )
                  )`;
    } else {
      // source.push(`function _mixin_${Identifier(node.name)}(attributes, block${node.args ? `, ${node.args}` : ''}) {`)
      // source.push('let _nodes = []')
      // this.processBlock(node.block, source)
      // source.push('return _nodes')
      // source.push('}')
      let blockNode = new _blockNode.default(this._node.block, this._option);
      let blockSource = await blockNode.getSource();
      source = ` function __mixin__${(0, _toJsIdentifier.default)(this._node.name)}(attribute, block${this._node.args ? `, ${this._node.args}` : ''}) {
                    const attributes = attribute
                    const __node = []
                    ${blockSource}
                    return __node
                  }`;
    }

    return source;
  }

}

var _default = MixinNode;
exports.default = _default;
//# sourceMappingURL=mixin-node.cjs.map