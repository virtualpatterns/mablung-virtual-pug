import Test from 'ava';

Test.before(async test => {
  test.context.index = await import('../index.js');
});

[
'Transform',
'Utility',
'UnrecognizedMessageTransformError',
'UnsupportedAttributeTransformError',
'UnsupportedCodeTransformError',
'UnsupportedCommentTransformError',
'UnsupportedDocTypeTransformError',
'UnsupportedTagTransformError'].
forEach(name => {

  Test(name, test => {
    test.truthy(test.context.index[name]);
  });

});
//# sourceMappingURL=index.test.js.map