// Created by @virtualpatterns/mablung-virtual-pug v0.0.1-15
// Path = 'distributable-esmodule/test/library/resource/transform/create-module-from-path/sub-folder/folder/00-content.pug'
import Utility from '@virtualpatterns/mablung-virtual-pug/utility'
function __getNode(__local = {}, __utility = {}) {
  function __getNode(__utility = {}) {
    const __node = []
    var authenticated = true
    __node.push(
      __utility.createNode(
        'body',
        (() => {
          const __attributeNode = {}
          __utility.addAttribute(
            'class',
            authenticated ? 'authed' : 'anon',
            __attributeNode
          )
          return __attributeNode
        })(),
        []
      )
    )
    return __node
  }
  return __getNode(__utility)
}
export default function (__local = {}, __utility = Utility) {
  return __getNode(__local, __utility)
}
