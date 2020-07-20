"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnrecognizedMessageTransformError = void 0;

var _transformError = require("./transform-error.js");

class UnrecognizedMessageTransformError extends _transformError.TransformError {
  constructor(message) {
    super(`The message '${message}' is not recognized.`);
  }

}

exports.UnrecognizedMessageTransformError = UnrecognizedMessageTransformError;
//# sourceMappingURL=unrecognized-message-transform-error.js.map