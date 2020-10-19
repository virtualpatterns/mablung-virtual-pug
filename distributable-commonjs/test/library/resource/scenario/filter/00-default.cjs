'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = _default

var _mablungVirtualPug = require('@virtualpatterns/mablung-virtual-pug')

// Created by @virtualpatterns/mablung-virtual-pug v0.0.1-13
// FilePath = 'distributable-commonjs/library/transform.cjs'
// Path = 'distributable-commonjs/test/library/resource/scenario/filter/00-default.pug'
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

function _default(__local = {}, __utility = _mablungVirtualPug.Utility) {
  return __getNode(__local, __utility)
}
