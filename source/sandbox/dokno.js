import '@virtualpatterns/mablung-source-map-support/install.js'
import CreateRealNode from 'virtual-dom/create-element.js'
import Format from 'pretty'

import { Transform } from '../library/transform.js'

const Require = __require

async function main() {

  try {

    let path = Require.resolve('../../source/sandbox/dokno.pug')

    let module = null
    module = await Transform.createModuleFromPath(path)
    module = module.default || module

    let virtualNode = module()

    // console.log('-'.repeat(80))
    // console.log('virtualNode')
    // console.log('-'.repeat(80))
    // console.dir(virtualNode, { 'depth': null })

    let realNode = virtualNode.map((virtualNode) => CreateRealNode(virtualNode)) 

    console.log('-'.repeat(80))
    console.log('CreateRealNode(virtualNode)')
    console.log('-'.repeat(80))
    realNode.forEach((realNode) => console.log(Format(realNode.toString()))) 
    console.log('-'.repeat(80))

  } catch (error) {
    console.log('-'.repeat(80))
    console.error(error)
    console.log('-'.repeat(80))
  }

}

main()