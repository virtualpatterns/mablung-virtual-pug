// Created by @virtualpatterns/mablung-virtual-pug v0.0.1-15
// Path = 'distributable-esmodule/test/library/resource/scenario/text/00-inline-tag.pug'
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
                'This is plain old <em>text</em> content.'
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
