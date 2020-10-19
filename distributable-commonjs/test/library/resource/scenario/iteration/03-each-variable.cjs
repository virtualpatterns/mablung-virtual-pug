'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = _default

var _mablungVirtualPug = require('@virtualpatterns/mablung-virtual-pug')

// Created by @virtualpatterns/mablung-virtual-pug v0.0.1-13
// FilePath = 'distributable-commonjs/library/transform.cjs'
// Path = 'distributable-commonjs/test/library/resource/scenario/iteration/03-each-variable.pug'
function __getNode(__local = {}, __utility = {}) {
  function __getNode(__utility = {}) {
    const __node = []
    var values = []

    __node.push(
      __utility.createNode(
        'ul',
        {},
        (() => {
          const __node = []

          __utility.forEach(
            values.length ? values : ['There are no values'],
            (val) => {
              __node.push(
                __utility.createNode(
                  'li',
                  {},
                  (() => {
                    const __node = []
                    {
                      let value = val

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
            }
          )

          return __node
        })()
      )
    )

    return __node
  }

  return __getNode(__utility)
}

function _default(__local = {}, __utility = _mablungVirtualPug.Utility) {
  return __getNode(__local, __utility)
}
