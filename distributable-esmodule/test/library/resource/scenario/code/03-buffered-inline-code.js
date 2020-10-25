// Created by @virtualpatterns/mablung-virtual-pug v0.0.1-15
// Path = 'distributable-esmodule/test/library/resource/scenario/code/03-buffered-inline-code.pug'
import Utility from '@virtualpatterns/mablung-virtual-pug/utility'
function __getNode(__local = {}, __utility = {}) {
  function __getNode(__utility = {}) {
    const __node = []
    __node.push(
      __utility.createNode(
        'p',
        {},
        (() => {
          const __node = []
          {
            let value = 'This code is' + ' <strong>not</strong> escaped!'
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
    return __node
  }
  return __getNode(__utility)
}
export default function (__local = {}, __utility = Utility) {
  return __getNode(__local, __utility)
}
