"use strict";

var _path = _interopRequireDefault(require("path"));

var _ava = _interopRequireDefault(require("ava"));

var _index = require("../../index.cjs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const FilePath = __filename;

const FolderPath = _path.default.dirname(FilePath);

const Require = require;
(0, _ava.default)('getASTFromPath(path)', async test => {
  await test.notThrowsAsync(_index.Transform.getASTFromPath(Require.resolve('./resource/00-default.pug')));
});
(0, _ava.default)('getSourceFromPath(path)', async test => {
  await test.notThrowsAsync(_index.Transform.getSourceFromPath(Require.resolve('./resource/00-default.pug')));
});
(0, _ava.default)('getFunctionSourceFromPath(path)', async test => {
  await test.notThrowsAsync(_index.Transform.getFunctionSourceFromPath(Require.resolve('./resource/00-default.pug')));
});
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
});
//# sourceMappingURL=transform.test.cjs.map