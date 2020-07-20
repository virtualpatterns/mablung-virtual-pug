import Path from 'path'
import Test from 'ava'

import { Transform } from '../../index.js'

import { UnsupportedAttributeTransformError } from '../../index.js'
import { UnsupportedCodeTransformError } from '../../index.js'
import { UnsupportedCommentTransformError } from '../../index.js'
import { UnsupportedDocTypeTransformError } from '../../index.js'
import { UnsupportedTagTransformError } from '../../index.js'

Test('getASTFromPath(path)', async (test) => {
  await test.notThrowsAsync(Transform.getASTFromPath(require.resolve('./resource/00-default.pug')))
})

Test('getSourceFromPath(path)', async (test) => {
  await test.notThrowsAsync(Transform.getSourceFromPath(require.resolve('./resource/00-default.pug')))
})

Test('getFunctionSourceFromPath(path)', async (test) => {
  await test.notThrowsAsync(Transform.getFunctionSourceFromPath(require.resolve('./resource/00-default.pug')))
})

// Test('createModuleFromPath(path)', async (test) => {

//   let module = await Transform.createModuleFromPath(require.resolve('./resource/00-default.pug'))
//   let virtualFn = module.default

//   test.notThrows(() => virtualFn())

// })

;[ 
  require.resolve('./resource/transform/attribute/07-escaped-attributes.pug') 
].forEach((path) => {

  Test(`getFunctionFromPath('${Path.relative(`${__dirname}/resource/transform`, path)}') throws UnsupportedAttributeTransformError`, async (test) => {
    await test.throwsAsync(Transform.getFunctionFromPath(path), { 'instanceOf': UnsupportedAttributeTransformError })
  })
  
})

;[ 
  require.resolve('./resource/transform/code/04-escaped-buffered-code.pug'),
  require.resolve('./resource/transform/code/05-escaped-buffered-inline-code.pug')
].forEach((path) => {

  Test(`getFunctionFromPath('${Path.relative(`${__dirname}/resource/transform`, path)}') throws UnsupportedCodeTransformError`, async (test) => {
    await test.throwsAsync(Transform.getFunctionFromPath(path), { 'instanceOf': UnsupportedCodeTransformError })
  })

})

;[ 
  require.resolve('./resource/transform/comment/00-default-buffered.pug'),
  require.resolve('./resource/transform/comment/02-block-buffered-comment.pug')
].forEach((path) => {

  Test(`getFunctionFromPath('${Path.relative(`${__dirname}/resource/transform`, path)}') throws UnsupportedCommentTransformError`, async (test) => {
    await test.throwsAsync(Transform.getFunctionFromPath(path), { 'instanceOf': UnsupportedCommentTransformError })
  })

})

;[ 
  require.resolve('./resource/transform/doctype/00-default.pug')
].forEach((path) => {

  Test(`getFunctionFromPath('${Path.relative(`${__dirname}/resource/transform`, path)}') throws UnsupportedDocTypeTransformError`, async (test) => {
    await test.throwsAsync(Transform.getFunctionFromPath(path), { 'instanceOf': UnsupportedDocTypeTransformError })
  })

})

;[ 
  require.resolve('./resource/transform/tag/02-self-closing-tag.pug')
].forEach((path) => {

  Test(`getFunctionFromPath('${Path.relative(`${__dirname}/resource/transform`, path)}') throws UnsupportedTagTransformError`, async (test) => {
    await test.throwsAsync(Transform.getFunctionFromPath(path), { 'instanceOf': UnsupportedTagTransformError })
  })

})
