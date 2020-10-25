// Created by @virtualpatterns/mablung-virtual-pug v0.0.1-15
// Path = 'distributable-esmodule/test/library/resource/scenario/comment/04-conditional-comment.skip.pug'
import Utility from '@virtualpatterns/mablung-virtual-pug/utility'
function __getNode(__local = {}, __utility = {}) {
  function __getNode(__utility = {}) {
    const __node = []
    // doctype html
    __node.push(
      ...[
        __utility.convertToNode(
          '<!--[if IE 8]>\n<html lang="en" class="lt-ie9">\n<![endif]-->\n<!--[if gt IE 8]><!-->\n<html lang="en">\n<!--<![endif]-->'
        )
      ].flat()
    )
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
                      'Supporting old web browsers is a pain.'
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
    // </html>
    return __node
  }
  return __getNode(__utility)
}
export default function (__local = {}, __utility = Utility) {
  return __getNode(__local, __utility)
}
