import DefaultChangeCase, * as ModuleChangeCase from 'change-case'
import Path from 'path'

const FilePath = __filePath
const { paramCase: ParameterCase } = DefaultChangeCase || ModuleChangeCase

class Node {

  constructor(node, option) {
    this._node = node
    this._option = option
  }

  async getSource() {}

  static async createNode(node, option) {

    let extension = null
    extension = Path.extname(FilePath)
    extension = extension.toLowerCase()

    let nodeClass = null
    nodeClass = await import(`./node/${ParameterCase(node.type)}-node${extension}`)
    nodeClass = nodeClass.default || nodeClass

    return new nodeClass(node, option)

  }

}

export default Node