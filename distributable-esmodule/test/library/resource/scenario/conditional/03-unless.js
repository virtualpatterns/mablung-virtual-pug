// Created by @virtualpatterns/mablung-virtual-pug v0.0.1-15
// Path = 'distributable-esmodule/test/library/resource/scenario/conditional/03-unless.pug'
import Utility from '@virtualpatterns/mablung-virtual-pug/utility'
function __getNode(__local = {}, __utility = {}) {
  function __getNode(__utility = {}) {
    const __node = []
    var user = { name: 'foo bar baz', isAnonymous: false }
    if (!user.isAnonymous) {
      __node.push(
        __utility.createNode(
          'p',
          {},
          (() => {
            const __node = []
            __node.push(
              ...[__utility.convertToNode("You're logged in as ")].flat()
            )
            {
              let value = user.name
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
    }
    return __node
  }
  return __getNode(__utility)
}
export default function (__local = {}, __utility = Utility) {
  return __getNode(__local, __utility)
}
