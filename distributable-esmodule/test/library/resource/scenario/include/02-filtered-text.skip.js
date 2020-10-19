// Created by @virtualpatterns/mablung-virtual-pug v0.0.1-13
// FilePath = 'distributable-esmodule/library/transform.js'
// Path = 'distributable-esmodule/test/library/resource/scenario/include/02-filtered-text.skip.pug'
import { Utility } from '@virtualpatterns/mablung-virtual-pug'
function __getNode(__local = {}, __utility = {}) {
  function __getNode(__utility = {}) {
    const __node = []
    __node.push(
      __utility.createNode(
        'html',
        {},
        (() => {
          const __node = []
          __node.push(
            __utility.createNode(
              'head',
              {},
              (() => {
                const __node = []
                __node.push(
                  __utility.createNode(
                    'title',
                    {},
                    (() => {
                      const __node = []
                      __node.push(
                        ...[__utility.convertToNode('An Article')].flat()
                      )
                      return __node
                    })()
                  )
                )
                return __node
              })()
            )
          )
          __node.push(
            __utility.createNode(
              'body',
              {},
              (() => {
                const __node = []
                __node.push(
                  ...[
                    __utility.convertToNode(
                      '# 02-filtered-text-markdown.md\n\nThis is an article written in markdown.'
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
    return __node
  }
  return __getNode(__utility)
}
export default function (__local = {}, __utility = Utility) {
  return __getNode(__local, __utility)
}
