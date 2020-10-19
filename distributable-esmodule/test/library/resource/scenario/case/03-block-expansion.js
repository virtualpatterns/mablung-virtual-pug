// Created by @virtualpatterns/mablung-virtual-pug v0.0.1-13
// FilePath = 'distributable-esmodule/library/transform.js'
// Path = 'distributable-esmodule/test/library/resource/scenario/case/03-block-expansion.pug'
import { Utility } from '@virtualpatterns/mablung-virtual-pug'
function __getNode(__local = {}, __utility = {}) {
  function __getNode(__utility = {}) {
    const __node = []
    var friends = 1
    switch (friends) {
      case 0:
        __node.push(
          __utility.createNode(
            'p',
            {},
            (() => {
              const __node = []
              __node.push(
                ...[__utility.convertToNode('you have no friends')].flat()
              )
              return __node
            })()
          )
        )
        break
      case 1:
        __node.push(
          __utility.createNode(
            'p',
            {},
            (() => {
              const __node = []
              __node.push(
                ...[__utility.convertToNode('you have a friend')].flat()
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
