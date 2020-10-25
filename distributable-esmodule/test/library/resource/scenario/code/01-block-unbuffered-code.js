// Created by @virtualpatterns/mablung-virtual-pug v0.0.1-15
// Path = 'distributable-esmodule/test/library/resource/scenario/code/01-block-unbuffered-code.pug'
import Utility from '@virtualpatterns/mablung-virtual-pug/utility'
function __getNode(__local = {}, __utility = {}) {
  function __getNode(__utility = {}) {
    const __node = []
    var list = ['Uno', 'Dos', 'Tres', 'Cuatro', 'Cinco', 'Seis']
    __utility.forEach(list, (item) => {
      __node.push(
        __utility.createNode(
          'li',
          {},
          (() => {
            const __node = []
            {
              let value = item
              if (typeof value === 'string') {
                __node.push(...[__utility.convertToNode(value)].flat())
              } else {
                __node.push(value)
              }
            }
            return __node
          })()
        )
      )
    })
    return __node
  }
  return __getNode(__utility)
}
export default function (__local = {}, __utility = Utility) {
  return __getNode(__local, __utility)
}
