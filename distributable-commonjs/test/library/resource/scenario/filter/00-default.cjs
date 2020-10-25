'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = _default

var _utility = _interopRequireDefault(
  require('@virtualpatterns/mablung-virtual-pug/utility')
)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

// Created by @virtualpatterns/mablung-virtual-pug v0.0.1-15
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

function _default(__local = {}, __utility = _utility.default) {
  return __getNode(__local, __utility)
}
