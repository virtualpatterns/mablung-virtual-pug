// Created by @virtualpatterns/mablung-virtual-pug v0.0.1-15
// Path = 'distributable-esmodule/test/library/resource/scenario/filter/01-inline-syntax.pug'
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
          __node.push(
            ...[__utility.convertToNode('<strong>BOLD TEXT</strong>')].flat()
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
            ...[
              __utility.convertToNode('In the midst of a large amount of plain')
            ].flat()
          )
          __node.push(...[__utility.convertToNode('\n')].flat())
          __node.push(
            ...[__utility.convertToNode('text, suddenly a wild ')].flat()
          )
          __node.push(...[__utility.convertToNode('<em>Markdown</em>')].flat())
          __node.push(...[__utility.convertToNode(' ')].flat())
          __node.push(...[__utility.convertToNode('\n')].flat())
          __node.push(...[__utility.convertToNode('appeared.')].flat())
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
