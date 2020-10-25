// Created by @virtualpatterns/mablung-virtual-pug v0.0.1-15
// Path = 'distributable-esmodule/test/library/resource/scenario/filter/02-nested-filter.skip.pug'
import Utility from '@virtualpatterns/mablung-virtual-pug/utility'
function __getNode(__local = {}, __utility = {}) {
  function __getNode(__utility = {}) {
    const __node = []
    __node.push(
      __utility.createNode(
        'script',
        {},
        (() => {
          const __node = []
          __node.push(
            ...[
              __utility.convertToNode(
                "//<![CDATA[\nconst myFunc = () => `This is ES2015 in a CD${'ATA'}`;\n//]]>"
              )
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
