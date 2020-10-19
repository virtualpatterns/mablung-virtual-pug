// Created by @virtualpatterns/mablung-virtual-pug v0.0.1-13
// FilePath = 'distributable-esmodule/library/transform.js'
// Path = 'distributable-esmodule/test/library/resource/scenario/interpolation/03-unescaped-string-interpolation-meta.pug'
import { Utility } from '@virtualpatterns/mablung-virtual-pug'
function __getNode(__local = {}, __utility = {}) {
  function __getNode(__utility = {}) {
    const __node = []
    __node.push(
      __utility.createNode(
        'p',
        {},
        (() => {
          const __node = []
          __node.push(
            ...[
              __utility.convertToNode('Escaping works with #{interpolation}')
            ].flat()
          )
          return __node
        })()
      )
    )
    __node.push(
      __utility.createNode(
        'p',
        {},
        (() => {
          const __node = []
          __node.push(
            ...[__utility.convertToNode('Interpolation works with ')].flat()
          )
          {
            let value = '!{interpolation}'
            if (typeof value === 'string') {
              __node.push(...[__utility.convertToNode(value)].flat())
            } else {
              __node.push(value)
            }
          }
          __node.push(...[__utility.convertToNode(' too!')].flat())
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
