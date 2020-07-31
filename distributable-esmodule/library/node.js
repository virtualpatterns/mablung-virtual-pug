import _URL from "url";import DefaultChangeCase, * as ModuleChangeCase from 'change-case';
import Path from 'path';

const FilePath = _URL.fileURLToPath(import.meta.url);
const { paramCase: ParameterCase } = DefaultChangeCase || ModuleChangeCase;

class Node {

  constructor(node, option) {
    this._node = node;
    this._option = option;
  }

  async getSource() {}

  static async createNode(node, option) {

    let extension = null;
    extension = Path.extname(FilePath);
    extension = extension.toLowerCase();

    let nodeClass = null;
    nodeClass = await import(`./node/${ParameterCase(node.type)}-node${extension}`);
    nodeClass = nodeClass.default || nodeClass;

    return new nodeClass(node, option);

  }

  // static __escape(value) {

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


export default Node;
//# sourceMappingURL=node.js.map