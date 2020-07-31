"use strict";

var _path = _interopRequireDefault(require("path"));

var _ava = _interopRequireDefault(require("ava"));

var _index = require("../../index.cjs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import CreateNode from 'virtual-dom/h.js'
// import _ConvertToNode from 'html-to-vdom'
// import VirtualNode from 'virtual-dom/vnode/vnode.js'
// import VirtualText from 'virtual-dom/vnode/vtext.js'
const FilePath = __filename;

const FolderPath = _path.default.dirname(FilePath);

const Require = require; // const ConvertToNode = _ConvertToNode({ 'VNode': VirtualNode, 'VText': VirtualText })

(0, _ava.default)('getASTFromPath(path)', async test => {
  await test.notThrowsAsync(_index.Transform.getASTFromPath(Require.resolve('./resource/00-default.pug')));
});
(0, _ava.default)('getSourceFromPath(path)', async test => {
  await test.notThrowsAsync(_index.Transform.getSourceFromPath(Require.resolve('./resource/00-default.pug')));
});
(0, _ava.default)('getFunctionSourceFromPath(path)', async test => {
  await test.notThrowsAsync(_index.Transform.getFunctionSourceFromPath(Require.resolve('./resource/00-default.pug')));
}) // Test('createModuleFromPath(path)', async (test) => {
//   let module = await Transform.createModuleFromPath(Require.resolve('./resource/00-default.pug'))
//   let virtualFn = module.default
//   test.notThrows(() => virtualFn())
// })
;
[Require.resolve('./resource/transform/attribute/07-escaped-attributes.pug')].forEach(path => {
  (0, _ava.default)(`getFunctionFromPath('${_path.default.relative(`${FolderPath}/resource/transform`, path)}') throws UnsupportedAttributeTransformError`, async test => {
    await test.throwsAsync(_index.Transform.getFunctionFromPath(path), {
      'instanceOf': _index.UnsupportedAttributeTransformError
    });
  });
});
[Require.resolve('./resource/transform/code/04-escaped-buffered-code.pug'), Require.resolve('./resource/transform/code/05-escaped-buffered-inline-code.pug')].forEach(path => {
  (0, _ava.default)(`getFunctionFromPath('${_path.default.relative(`${FolderPath}/resource/transform`, path)}') throws UnsupportedCodeTransformError`, async test => {
    await test.throwsAsync(_index.Transform.getFunctionFromPath(path), {
      'instanceOf': _index.UnsupportedCodeTransformError
    });
  });
});
[Require.resolve('./resource/transform/comment/00-default-buffered.pug'), Require.resolve('./resource/transform/comment/02-block-buffered-comment.pug')].forEach(path => {
  (0, _ava.default)(`getFunctionFromPath('${_path.default.relative(`${FolderPath}/resource/transform`, path)}') throws UnsupportedCommentTransformError`, async test => {
    await test.throwsAsync(_index.Transform.getFunctionFromPath(path), {
      'instanceOf': _index.UnsupportedCommentTransformError
    });
  });
});
[Require.resolve('./resource/transform/doctype/00-default.pug')].forEach(path => {
  (0, _ava.default)(`getFunctionFromPath('${_path.default.relative(`${FolderPath}/resource/transform`, path)}') throws UnsupportedDocTypeTransformError`, async test => {
    await test.throwsAsync(_index.Transform.getFunctionFromPath(path), {
      'instanceOf': _index.UnsupportedDocTypeTransformError
    });
  });
});
[Require.resolve('./resource/transform/tag/02-self-closing-tag.pug')].forEach(path => {
  (0, _ava.default)(`getFunctionFromPath('${_path.default.relative(`${FolderPath}/resource/transform`, path)}') throws UnsupportedTagTransformError`, async test => {
    await test.throwsAsync(_index.Transform.getFunctionFromPath(path), {
      'instanceOf': _index.UnsupportedTagTransformError
    });
  });
}); // This had already existed in scenario.test
// ;[ 
//   Require.resolve('./resource/transform/text/01-literal-html.only.pug')
// ].forEach((path) => {
//   Test(`getFunctionFromPath('${Path.relative(`${FolderPath}/resource/transform`, path)}')(...) throws TypeError`, async (test) => {
//     await test.throwsAsync(Transform.getFunctionFromPath(path).then((virtualFn) => virtualFn({}, { 'createNode': CreateNode, 'convertToNode': ConvertToNode })), { 'instanceOf': TypeError })
//   })
// })
//# sourceMappingURL=transform.test.cjs.map