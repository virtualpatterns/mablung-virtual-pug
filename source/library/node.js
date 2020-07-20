import * as ChangeCase from 'change-case'

const { paramCase: ParameterCase } = ChangeCase

class Node {

  constructor(node, option) {
    this._node = node
    this._option = option
  }

  async getSource() {}

  static async createNode(node, option) {

    let nodeClass = null
    nodeClass = await import(`./node/${ParameterCase(node.type)}-node.js`)
    nodeClass = nodeClass.default || nodeClass

    return new nodeClass(node, option)

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

export default Node