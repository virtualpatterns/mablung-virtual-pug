import CreateVirtualNode from 'virtual-dom/h.js'
import _ConvertToVirtualNode from 'html-to-vdom'
import VirtualNode from 'virtual-dom/vnode/vnode.js'
import VirtualText from 'virtual-dom/vnode/vtext.js'
const ConvertToVirtualNode = _ConvertToVirtualNode({
  VNode: VirtualNode,
  VText: VirtualText
})
function __getNode(__local = {}, __option = {}) {
  // Powered by @virtualpatterns/mablung-virtual-pug v0.0.1-7
  // FilePath = 'distributable-esmodule/library/transform.js'

  function __forEach(value, fn) {
    if (Array.isArray(value)) {
      value.forEach(fn)
      return value.length
    } else {
      let entry = Object.entries(value)

      entry.forEach(([name, value]) => fn(value, name))
      return entry.length
    }
  }
  function __addAndAttribute(object, attributeNode) {
    Object.entries(object).forEach(([name, value]) =>
      __addAttribute(name, value, attributeNode)
    ) // eslint-disable-line no-undef
  }
  function __getAttributeValue(name, value, currentValue) {
    if (typeof value === 'boolean') {
      value = value ? name : false
    } else if (typeof value === 'string') {
      value = currentValue ? `${currentValue} ${value}` : value
    } else if (Array.isArray(value)) {
      value = currentValue
        ? `${currentValue} ${value.join(' ')}`
        : value.join(' ')
    } else {
      switch (name.toUpperCase()) {
        case 'CLASS':
          value = Object.keys(value)
            .filter((key) => value[key])
            .join(' ')
          break
        case 'STYLE':
          value = Object.keys(value)
            .map((key) => `${key}:${value[key]};`)
            .join('')
          break
      }
    }

    return value === '' ? undefined : value
  }
  function __addAttribute(name, value, attributeNode) {
    if (typeof value === 'boolean' && value === false) {
      // do nothing
    } else {
      if (
        (value = __getAttributeValue(name, value, attributeNode[name])) !==
        undefined
      ) {
        // eslint-disable-line no-undef
        // attribute values are always not escaped and then escaped by the virtualization process
        attributeNode[name] = value // eslint-disable-line no-undef
      }
    }
  }
  function __getNode(__option = {}) {
    // Powered by @virtualpatterns/mablung-virtual-pug v0.0.1-7
    // FilePath = 'distributable-esmodule/library/transform.js'
    const __node = []
    // doctype html
    __node.push(
      ...[
        __option.convertToNode(
          '<!--[if IE 8]>\n<html lang="en" class="lt-ie9">\n<![endif]-->\n<!--[if gt IE 8]><!-->\n<html lang="en">\n<!--<![endif]-->'
        )
      ].flat()
    )
    __node.push(
      __option.createNode(
        'body',
        {},
        (() => {
          const __node = []
          __node.push(
            __option.createNode(
              'p',
              {},
              (() => {
                const __node = []
                __node.push(
                  ...[
                    __option.convertToNode(
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
  return __getNode(__option)
}
export default function (
  __local = {},
  __option = {
    createNode: CreateVirtualNode,
    convertToNode: ConvertToVirtualNode
  }
) {
  // Powered by @virtualpatterns/mablung-virtual-pug v0.0.1-7
  // FilePath = 'distributable-esmodule/library/transform.js'
  return __getNode(__local, __option)
}
