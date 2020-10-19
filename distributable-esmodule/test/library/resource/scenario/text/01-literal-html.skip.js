// Created by @virtualpatterns/mablung-virtual-pug v0.0.1-13
// FilePath = 'distributable-esmodule/library/transform.js'
// Path = 'distributable-esmodule/test/library/resource/scenario/text/01-literal-html.skip.pug'
import { Utility } from '@virtualpatterns/mablung-virtual-pug'
function __getNode(__local = {}, __utility = {}) {
  function __getNode(__utility = {}) {
    const __node = []
    __node.push(...[__utility.convertToNode('<html>')].flat())
    __node.push(
      __utility.createNode(
        'body',
        {},
        (() => {
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
                      'Indenting the body tag here would make no difference.'
                    )
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
                  ...[
                    __utility.convertToNode(
                      "HTML itself isn't whitespace-sensitive."
                    )
                  ].flat()
                )
                return __node
              })()
            )
          )
          return __node
        })()
      )
    )
    __node.push(...[__utility.convertToNode('</html>')].flat())
    return __node
  }
  return __getNode(__utility)
}
export default function (__local = {}, __utility = Utility) {
  return __getNode(__local, __utility)
}
