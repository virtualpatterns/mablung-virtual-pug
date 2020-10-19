import '@virtualpatterns/mablung-source-map-support/install'

import { abc } from '@virtualpatterns/mablung-check-dependency'

async function main() {
  try {
    let a = { 'a': 123, 'b': 456 }
  } catch (error) {
    console.error(error)
  }
}

main()
