// Created by @virtualpatterns/mablung-virtual-pug v0.0.1-15
// Path = 'distributable-esmodule/test/library/resource/scenario/inheritance/00-default-inherits.pug'
import Utility from '@virtualpatterns/mablung-virtual-pug/utility'
function __getNode(__local = {}, __utility = {}) {
  const { title } = __local
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
                        ...[__utility.convertToNode('My Site - ')].flat()
                      )
                      {
                        let value = title
                        if (typeof value === 'string') {
                          __node.push(
                            ...[__utility.convertToNode(value)].flat()
                          )
                        } else {
                          __node.push(value)
                        }
                      }
                      return __node
                    })()
                  )
                )
                __node.push(
                  __utility.createNode(
                    'script',
                    (() => {
                      const __attributeNode = {}
                      __utility.addAttribute(
                        'src',
                        '/jquery.js',
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
                      __utility.addAttribute('src', '/pets.js', __attributeNode)
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
                __node.push(
                  __utility.createNode(
                    'h1',
                    {},
                    (() => {
                      const __node = []
                      {
                        let value = title
                        if (typeof value === 'string') {
                          __node.push(
                            ...[__utility.convertToNode(value)].flat()
                          )
                        } else {
                          __node.push(value)
                        }
                      }
                      return __node
                    })()
                  )
                )
                var pets = ['cat', 'dog']
                __utility.forEach(pets, (petName) => {
                  __node.push(
                    __utility.createNode(
                      'p',
                      {},
                      (() => {
                        const __node = []
                        {
                          let value = petName
                          if (typeof value === 'string') {
                            __node.push(
                              ...[__utility.convertToNode(value)].flat()
                            )
                          } else {
                            __node.push(value)
                          }
                        }
                        return __node
                      })()
                    )
                  )
                })
                __node.push(
                  __utility.createNode(
                    'div',
                    (() => {
                      const __attributeNode = {}
                      __utility.addAttribute('id', 'footer', __attributeNode)
                      return __attributeNode
                    })(),
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
                                __utility.convertToNode('some footer content')
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
