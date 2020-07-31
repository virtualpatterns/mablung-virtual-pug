import Filter from 'pug-filters';

import Node from '../node.js';

class FilterNode extends Node {

  constructor(node, option) {
    super(node, option);
  }

  async getSource() {

    Filter.handleFilters(this._node);

    let node = await Node.createNode(this._node, this._option);
    let source = await node.getSource();

    return source;

  }}



export default FilterNode;
//# sourceMappingURL=filter-node.js.map