// Created by @virtualpatterns/mablung-virtual-pug v0.0.1-15
// Path = 'distributable-esmodule/test/library/resource/scenario/conditional/02-default-else.pug'
import Utility from '@virtualpatterns/mablung-virtual-pug/utility'
function __getNode(__local = {}, __utility = {}) {
  function __getNode(__utility = {}) {
    const __node = []
    var user = { descriptionX: 'foo bar baz' }
    var authorised = false
    __node.push(
      __utility.createNode(
        'div',
        (() => {
          const __attributeNode = {}
          __utility.addAttribute('id', 'user', __attributeNode)
          return __attributeNode
        })(),
        (() => {
          const __node = []
          if (user.description) {
            __node.push(
              __utility.createNode(
                'h2',
                (() => {
                  const __attributeNode = {}
                  __utility.addAttribute('class', 'green', __attributeNode)
                  return __attributeNode
                })(),
                (() => {
                  const __node = []
                  __node.push(
                    ...[__utility.convertToNode('Description')].flat()
                  )
                  return __node
                })()
              )
            )
            __node.push(
              __utility.createNode(
                'p',
                (() => {
                  const __attributeNode = {}
                  __utility.addAttribute(
                    'class',
                    'description',
                    __attributeNode
                  )
                  return __attributeNode
                })(),
                (() => {
                  const __node = []
                  {
                    let value = user.description
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
          } else {
            if (authorised) {
              __node.push(
                __utility.createNode(
                  'h2',
                  (() => {
                    const __attributeNode = {}
                    __utility.addAttribute('class', 'blue', __attributeNode)
                    return __attributeNode
                  })(),
                  (() => {
                    const __node = []
                    __node.push(
                      ...[__utility.convertToNode('Description')].flat()
                    )
                    return __node
                  })()
                )
              )
              __node.push(
                __utility.createNode(
                  'p',
                  (() => {
                    const __attributeNode = {}
                    __utility.addAttribute(
                      'class',
                      'description',
                      __attributeNode
                    )
                    return __attributeNode
                  })(),
                  (() => {
                    const __node = []
                    __node.push(
                      ...[
                        __utility.convertToNode('User has no description,')
                      ].flat()
                    )
                    __node.push(...[__utility.convertToNode('\n')].flat())
                    __node.push(
                      ...[__utility.convertToNode('why not add one...')].flat()
                    )
                    return __node
                  })()
                )
              )
            } else {
              __node.push(
                __utility.createNode(
                  'h2',
                  (() => {
                    const __attributeNode = {}
                    __utility.addAttribute('class', 'red', __attributeNode)
                    return __attributeNode
                  })(),
                  (() => {
                    const __node = []
                    __node.push(
                      ...[__utility.convertToNode('Description')].flat()
                    )
                    return __node
                  })()
                )
              )
              __node.push(
                __utility.createNode(
                  'p',
                  (() => {
                    const __attributeNode = {}
                    __utility.addAttribute(
                      'class',
                      'description',
                      __attributeNode
                    )
                    return __attributeNode
                  })(),
                  (() => {
                    const __node = []
                    __node.push(
                      ...[
                        __utility.convertToNode('User has no description')
                      ].flat()
                    )
                    return __node
                  })()
                )
              )
            }
          }
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
