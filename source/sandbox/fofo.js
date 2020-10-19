import '@virtualpatterns/mablung-source-map-support/install'
import Escape from 'jsesc'

import { Transform } from '../library/transform.js'

const Require = __require

async function main() {

  try {

    let message = '\'This is the end\' they tell me'

    let code = null
    code = `console.log('${Escape(message)}')`
    console.log(code)

    code = await Transform.formatSource(code)
    console.log(code)

  } catch (error) {
    console.log('-'.repeat(80))
    console.error(error)
    console.log('-'.repeat(80))
  }

}

main()