// Created by @virtualpatterns/mablung-virtual-pug v0.0.1-13
// FilePath = 'distributable-esmodule/library/transform.js'
// Path = 'distributable-esmodule/test/library/resource/scenario/interpolation/05-tag-interpolation.pug'
import { Utility } from '@virtualpatterns/mablung-virtual-pug'
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
                'This is a very long and boring paragraph that spans multiple lines.'
              )
            ].flat()
          )
          __node.push(...[__utility.convertToNode('\n')].flat())
          __node.push(
            ...[
              __utility.convertToNode(
                'Suddenly there is a ![strong strongly worded phrase] that cannot be'
              )
            ].flat()
          )
          __node.push(...[__utility.convertToNode('\n')].flat())
          __node.push(...[__utility.convertToNode('![em ignored].')].flat())
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
                "And here's an example of an interpolated tag with an attribute:"
              )
            ].flat()
          )
          __node.push(...[__utility.convertToNode('\n')].flat())
          __node.push(
            ...[
              __utility.convertToNode('![q(lang="es") \xA1Hola Mundo!]')
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
