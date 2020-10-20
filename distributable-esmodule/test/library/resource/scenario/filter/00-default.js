// Created by @virtualpatterns/mablung-virtual-pug v0.0.1-14
// Path = 'distributable-esmodule/test/library/resource/scenario/filter/00-default.pug'
import Utility from '@virtualpatterns/mablung-virtual-pug/utility'
function __getNode(__local = {}, __utility = {}) {
  function __getNode(__utility = {}) {
    const __node = []
    __node.push(
      ...[
        __utility.convertToNode(
          '<h1>Markdown</h1>\n<p>Markdown document with <a href="http://links.com">http://links.com</a> and</p>\n<pre><code class="highlight-js">var codeBlocks;\n</code></pre>\n'
        )
      ].flat()
    )
    __node.push(
      __utility.createNode(
        'script',
        {},
        (() => {
          const __node = []
          __node.push(
            ...[
              __utility.convertToNode(
                "(function() {\n  console.log('This is coffee script');\n\n}).call(this);\n"
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
