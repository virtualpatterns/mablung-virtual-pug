// Created by @virtualpatterns/mablung-virtual-pug v0.0.1-15
// Path = 'distributable-esmodule/test/library/resource/scenario/case/01-case-fall-through.pug'
import Utility from '@virtualpatterns/mablung-virtual-pug/utility'
function __getNode(__local = {}, __utility = {}) {
  function __getNode(__utility = {}) {
    const __node = []
    var friends = 0
    switch (friends) {
      case 0:
      case 1:
        __node.push(
          __utility.createNode(
            'p',
            {},
            (() => {
              const __node = []
              __node.push(
                ...[__utility.convertToNode('you have very few friends')].flat()
              )
              return __node
            })()
          )
        )
        break
      default:
        __node.push(
          __utility.createNode(
            'p',
            {},
            (() => {
              const __node = []
              __node.push(...[__utility.convertToNode('you have ')].flat())
              {
                let value = friends
                if (typeof value === 'string') {
                  __node.push(...[__utility.convertToNode(value)].flat())
                } else {
                  __node.push(value)
                }
              }
              __node.push(...[__utility.convertToNode(' friends')].flat())
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
