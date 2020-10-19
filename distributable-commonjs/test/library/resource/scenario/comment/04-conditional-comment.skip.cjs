'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = _default

var _mablungVirtualPug = require('@virtualpatterns/mablung-virtual-pug')

// Created by @virtualpatterns/mablung-virtual-pug v0.0.1-13
// FilePath = 'distributable-commonjs/library/transform.cjs'
// Path = 'distributable-commonjs/test/library/resource/scenario/comment/04-conditional-comment.skip.pug'
function __getNode(__local = {}, __utility = {}) {
  function __getNode(__utility = {}) {
    const __node = [] // doctype html

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
    ) // </html>

    return __node
  }

  return __getNode(__utility)
}

function _default(__local = {}, __utility = _mablungVirtualPug.Utility) {
  return __getNode(__local, __utility)
}
