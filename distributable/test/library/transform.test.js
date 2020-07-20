"use strict";

var _path = _interopRequireDefault(require("path"));

var _ava = _interopRequireDefault(require("ava"));

var _index = require("../../index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _ava.default)('getASTFromPath(path)', async test => {
  await test.notThrowsAsync(_index.Transform.getASTFromPath(require.resolve('./resource/00-default.pug')));
});
(0, _ava.default)('getSourceFromPath(path)', async test => {
  await test.notThrowsAsync(_index.Transform.getSourceFromPath(require.resolve('./resource/00-default.pug')));
});
(0, _ava.default)('getFunctionSourceFromPath(path)', async test => {
  await test.notThrowsAsync(_index.Transform.getFunctionSourceFromPath(require.resolve('./resource/00-default.pug')));
}) // Test('createModuleFromPath(path)', async (test) => {
//   let module = await Transform.createModuleFromPath(require.resolve('./resource/00-default.pug'))
//   let virtualFn = module.default
//   test.notThrows(() => virtualFn())
// })
;
[require.resolve('./resource/transform/attribute/07-escaped-attributes.pug')].forEach(path => {
  (0, _ava.default)(`getFunctionFromPath('${_path.default.relative(`${__dirname}/resource/transform`, path)}') throws UnsupportedAttributeTransformError`, async test => {
    await test.throwsAsync(_index.Transform.getFunctionFromPath(path), {
      'instanceOf': _index.UnsupportedAttributeTransformError
    });
  });
});
[require.resolve('./resource/transform/code/04-escaped-buffered-code.pug'), require.resolve('./resource/transform/code/05-escaped-buffered-inline-code.pug')].forEach(path => {
  (0, _ava.default)(`getFunctionFromPath('${_path.default.relative(`${__dirname}/resource/transform`, path)}') throws UnsupportedCodeTransformError`, async test => {
    await test.throwsAsync(_index.Transform.getFunctionFromPath(path), {
      'instanceOf': _index.UnsupportedCodeTransformError
    });
  });
});
[require.resolve('./resource/transform/comment/00-default-buffered.pug'), require.resolve('./resource/transform/comment/02-block-buffered-comment.pug')].forEach(path => {
  (0, _ava.default)(`getFunctionFromPath('${_path.default.relative(`${__dirname}/resource/transform`, path)}') throws UnsupportedCommentTransformError`, async test => {
    await test.throwsAsync(_index.Transform.getFunctionFromPath(path), {
      'instanceOf': _index.UnsupportedCommentTransformError
    });
  });
});
[require.resolve('./resource/transform/doctype/00-default.pug')].forEach(path => {
  (0, _ava.default)(`getFunctionFromPath('${_path.default.relative(`${__dirname}/resource/transform`, path)}') throws UnsupportedDocTypeTransformError`, async test => {
    await test.throwsAsync(_index.Transform.getFunctionFromPath(path), {
      'instanceOf': _index.UnsupportedDocTypeTransformError
    });
  });
});
[require.resolve('./resource/transform/tag/02-self-closing-tag.pug')].forEach(path => {
  (0, _ava.default)(`getFunctionFromPath('${_path.default.relative(`${__dirname}/resource/transform`, path)}') throws UnsupportedTagTransformError`, async test => {
    await test.throwsAsync(_index.Transform.getFunctionFromPath(path), {
      'instanceOf': _index.UnsupportedTagTransformError
    });
  });
});
//# sourceMappingURL=transform.test.js.map