// Created by @virtualpatterns/mablung-virtual-pug v0.0.1-14
// Path = 'distributable-esmodule/test/library/resource/scenario/iteration/04-each-else.pug'
import Utility from '@virtualpatterns/mablung-virtual-pug/utility'
function __getNode(__local = {}, __utility = {}) {
  function __getNode(__utility = {}) {
    const __node = []
    var values = []
    __node.push(
      __utility.createNode(
        'ul',
        {},
        (() => {
          const __node = []
          if (
            __utility.forEach(values, (val) => {
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
            }) <= 0
          ) {
            __node.push(
              __utility.createNode(
                'li',
                {},
                (() => {
                  const __node = []
                  __node.push(
                    ...[__utility.convertToNode('There are no values')].flat()
                  )
                  return __node
                })()
              )
            )
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
