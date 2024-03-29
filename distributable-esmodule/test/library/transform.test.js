import { createRequire as _createRequire } from "module";import _URL from "url";import Path from 'path';
import Test from 'ava';

import { Transform } from '../../index.js';

import { UnsupportedAttributeTransformError } from '../../index.js';
import { UnsupportedCodeTransformError } from '../../index.js';
import { UnsupportedCommentTransformError } from '../../index.js';
import { UnsupportedDocTypeTransformError } from '../../index.js';
import { UnsupportedTagTransformError } from '../../index.js';

const FilePath = _URL.fileURLToPath(import.meta.url);
const FolderPath = Path.dirname(FilePath);
const Require = _createRequire(import.meta.url);

Test('getASTFromPath(path)', async test => {
  await test.notThrowsAsync(Transform.getASTFromPath(Require.resolve('./resource/00-default.pug')));
});

Test('getSourceFromPath(path)', async test => {
  await test.notThrowsAsync(Transform.getSourceFromPath(Require.resolve('./resource/00-default.pug')));
});

Test('getFunctionSourceFromPath(path)', async test => {
  await test.notThrowsAsync(Transform.getFunctionSourceFromPath(Require.resolve('./resource/00-default.pug')));
});

[
Require.resolve('./resource/transform/attribute/07-escaped-attributes.pug')].
forEach(path => {

  Test(`getFunctionFromPath('${Path.relative(`${FolderPath}/resource/transform`, path)}') throws UnsupportedAttributeTransformError`, async test => {
    await test.throwsAsync(Transform.getFunctionFromPath(path), { 'instanceOf': UnsupportedAttributeTransformError });
  });

});

[
Require.resolve('./resource/transform/code/04-escaped-buffered-code.pug'),
Require.resolve('./resource/transform/code/05-escaped-buffered-inline-code.pug')].
forEach(path => {

  Test(`getFunctionFromPath('${Path.relative(`${FolderPath}/resource/transform`, path)}') throws UnsupportedCodeTransformError`, async test => {
    await test.throwsAsync(Transform.getFunctionFromPath(path), { 'instanceOf': UnsupportedCodeTransformError });
  });

});

[
Require.resolve('./resource/transform/comment/00-default-buffered.pug'),
Require.resolve('./resource/transform/comment/02-block-buffered-comment.pug')].
forEach(path => {

  Test(`getFunctionFromPath('${Path.relative(`${FolderPath}/resource/transform`, path)}') throws UnsupportedCommentTransformError`, async test => {
    await test.throwsAsync(Transform.getFunctionFromPath(path), { 'instanceOf': UnsupportedCommentTransformError });
  });

});

[
Require.resolve('./resource/transform/doctype/00-default.pug')].
forEach(path => {

  Test(`getFunctionFromPath('${Path.relative(`${FolderPath}/resource/transform`, path)}') throws UnsupportedDocTypeTransformError`, async test => {
    await test.throwsAsync(Transform.getFunctionFromPath(path), { 'instanceOf': UnsupportedDocTypeTransformError });
  });

});

[
Require.resolve('./resource/transform/tag/02-self-closing-tag.pug')].
forEach(path => {

  Test(`getFunctionFromPath('${Path.relative(`${FolderPath}/resource/transform`, path)}') throws UnsupportedTagTransformError`, async test => {
    await test.throwsAsync(Transform.getFunctionFromPath(path), { 'instanceOf': UnsupportedTagTransformError });
  });

});
//# sourceMappingURL=transform.test.js.map