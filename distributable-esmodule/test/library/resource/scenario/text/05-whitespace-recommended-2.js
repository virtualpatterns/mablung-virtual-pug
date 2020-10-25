// Created by @virtualpatterns/mablung-virtual-pug v0.0.1-15
// Path = 'distributable-esmodule/test/library/resource/scenario/text/05-whitespace-recommended-2.pug'
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
            ...[
              __utility.convertToNode(
                'Using regular tags can help keep your lines short,'
              )
            ].flat()
          )
          __node.push(...[__utility.convertToNode('\n')].flat())
          __node.push(
            ...[
              __utility.convertToNode('but interpolated tags may be easier to ')
            ].flat()
          )
          __node.push(
            __utility.createNode(
              'em',
              {},
              (() => {
                const __node = []
                __node.push(...[__utility.convertToNode('visualize')].flat())
                return __node
              })()
            )
          )
          __node.push(...[__utility.convertToNode(' ')].flat())
          __node.push(...[__utility.convertToNode('\n')].flat())
          __node.push(
            ...[
              __utility.convertToNode(
                'whether the tags and text are whitespace-separated.'
              )
            ].flat()
          )
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
