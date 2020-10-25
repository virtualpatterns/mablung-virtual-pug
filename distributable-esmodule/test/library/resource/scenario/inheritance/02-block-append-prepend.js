// Created by @virtualpatterns/mablung-virtual-pug v0.0.1-15
// Path = 'distributable-esmodule/test/library/resource/scenario/inheritance/02-block-append-prepend.pug'
import Utility from '@virtualpatterns/mablung-virtual-pug/utility'
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
                    'script',
                    (() => {
                      const __attributeNode = {}
                      __utility.addAttribute(
                        'src',
                        '/vendor/jquery.js',
                        __attributeNode
                      )
                      return __attributeNode
                    })(),
                    []
                  )
                )
                __node.push(
                  __utility.createNode(
                    'script',
                    (() => {
                      const __attributeNode = {}
                      __utility.addAttribute(
                        'src',
                        '/vendor/caustic.js',
                        __attributeNode
                      )
                      return __attributeNode
                    })(),
                    []
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
                // BlockNode.isEmpty = true
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
