"use strict";

var _ava = _interopRequireDefault(require("ava"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_ava.default.before(async test => {
  test.context.index = await Promise.resolve().then(() => _interopRequireWildcard(require('../index.js')));
});

['Transform', 'UnrecognizedMessageTransformError', 'UnsupportedAttributeTransformError', 'UnsupportedCodeTransformError', 'UnsupportedCommentTransformError', 'UnsupportedDocTypeTransformError', 'UnsupportedTagTransformError'].forEach(name => {
  (0, _ava.default)(name, async test => {
    test.truthy(test.context.index[name]);
  });
});
//# sourceMappingURL=index.test.js.map