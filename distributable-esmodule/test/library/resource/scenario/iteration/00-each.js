// Created by @virtualpatterns/mablung-virtual-pug v0.0.1-13
// FilePath = 'distributable-esmodule/library/transform.js'
// Path = 'distributable-esmodule/test/library/resource/scenario/iteration/00-each.pug'
import { Utility } from '@virtualpatterns/mablung-virtual-pug'
function __getNode(__local = {}, __utility = {}) {
  function __getNode(__utility = {}) {
    const __node = []
    __node.push(
      __utility.createNode(
        'ul',
        {},
        (() => {
          const __node = []
          __utility.forEach([1, 2, 3], (val) => {
            __node.push(
              __utility.createNode(
                'li',
                {},
                (() => {
                  const __node = []
                  {
                    let value = val
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
