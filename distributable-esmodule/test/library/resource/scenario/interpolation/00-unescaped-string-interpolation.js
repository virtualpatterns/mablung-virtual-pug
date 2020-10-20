// Created by @virtualpatterns/mablung-virtual-pug v0.0.1-14
// Path = 'distributable-esmodule/test/library/resource/scenario/interpolation/00-unescaped-string-interpolation.pug'
import Utility from '@virtualpatterns/mablung-virtual-pug/utility'
function __getNode(__local = {}, __utility = {}) {
  function __getNode(__utility = {}) {
    const __node = []
    var title = "On Dogs: Man's Best Friend"
    var author = 'enlore'
    var theGreat = '<span>escape!</span>'
    __node.push(
      __utility.createNode(
        'h1',
        {},
        (() => {
          const __node = []
          {
            let value = title
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
    __node.push(
      __utility.createNode(
        'p',
        {},
        (() => {
          const __node = []
          __node.push(
            ...[__utility.convertToNode('Written with love by ')].flat()
          )
          {
            let value = author
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
    __node.push(
      __utility.createNode(
        'p',
        {},
        (() => {
          const __node = []
          __node.push(
            ...[__utility.convertToNode('This will be safe: ')].flat()
          )
          {
            let value = theGreat
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
