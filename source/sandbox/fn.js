
import { Transform } from '../index.js'

const Require = __require

async function main() {

  try {

    let path = Require.resolve('../test/library/resource/transform/attribute/12-class-literal-classname.pug')
    let virtualFn = await Transform.getFunctionFromPath(path)

    console.log(typeof virtualFn)

  } catch (error) {
    console.log('-'.repeat(80))
    console.error(error)
    console.log('-'.repeat(80))
  }

}

main()
