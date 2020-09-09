"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Transform = void 0;

var ModuleBabel = _interopRequireWildcard(require("@babel/core"));

var _eslint = _interopRequireDefault(require("eslint"));

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _prettier = _interopRequireDefault(require("prettier"));

var _is = _interopRequireDefault(require("@pwn/is"));

var _json = _interopRequireDefault(require("json5"));

var _pugLexer = _interopRequireDefault(require("pug-lexer"));

var _pugLinker = _interopRequireDefault(require("pug-linker"));

var _pugLoad = _interopRequireDefault(require("pug-load"));

var _pugParser = _interopRequireDefault(require("pug-parser"));

var _path = _interopRequireDefault(require("path"));

var _andAttributeNode = _interopRequireDefault(require("./node/and-attribute-node.cjs"));

var _attributeNode = _interopRequireDefault(require("./node/attribute-node.cjs"));

var _blockNode = _interopRequireDefault(require("./node/block-node.cjs"));

var _eachNode = _interopRequireDefault(require("./node/each-node.cjs"));

var _tagNode = _interopRequireDefault(require("./node/tag-node.cjs"));

var _package = require("./package.cjs");

var _unrecognizedMessageTransformError = require("./error/unrecognized-message-transform-error.cjs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Babel = ModuleBabel.default || ModuleBabel;
const {
  ESLint: Lint
} = _eslint.default;
const FilePath = __filename;
const {
  format: Format
} = _prettier.default;
const Require = require;

class Transform {
  static getASTFromContent(content, option = {
    'path': '(anonymous)'
  }) {
    // console.log('Transform.getASTFromContent(content, option) { ... }')
    let lexerOutput = (0, _pugLexer.default)(content, {
      'filename': option.path
    });
    let parserOutput = (0, _pugParser.default)(lexerOutput, {
      'filename': option.path
    });
    let loaderOutput = (0, _pugLoad.default)(parserOutput, {
      'lex': _pugLexer.default,
      'parse': _pugParser.default
    });
    let AST = (0, _pugLinker.default)(loaderOutput);
    return AST;
  }

  static async getSourceFromContent(content, option = {
    'path': '(anonymous)'
  }) {
    // console.log('Transform.getSourceFromContent(content, option) { ... }')
    let AST = this.getASTFromContent(content, option);
    let blockNode = new _blockNode.default(AST, option);
    let blockSource = await blockNode.getSource();
    let source = ` function ${_eachNode.default.__forEach.toString()}
                    function ${_andAttributeNode.default.__addAndAttribute.toString()}
                    function ${_attributeNode.default.__getAttributeName.toString()}
                    function ${_attributeNode.default.__getAttributeValue.toString()}
                    function ${_attributeNode.default.__addAttribute.toString()}
                    function ${_tagNode.default.__getNodeName.toString()}
                    function ${_tagNode.default.__getNodeProperty.toString()}
                    function ${_tagNode.default.__getChildNode.toString()}
                    function ${_tagNode.default.__createNode.toString()}
                    function __getNode(__option = {}) { 
                      // Powered by ${_package.Package.name} v${_package.Package.version}
                      // FilePath = '${_path.default.relative('', FilePath)}'
                      const __node = []
                      ${blockSource}
                      return __node
                    }`;
    let local = await this._getLocalFromSource(source);
    return {
      source,
      local
    };
  }

  static async getFunctionSourceFromContent(content, option = {
    'path': '(anonymous)'
  }) {
    // console.log('Transform.getFunctionSourceFromContent(content, option) { ... }')
    let {
      source,
      local
    } = await this.getSourceFromContent(content, option);
    local = local.map(local => `const { ${local} } = __local`).join('\n');
    source = ` function __getNode(__local = {}, __option = {}) {
                  // Powered by ${_package.Package.name} v${_package.Package.version}
                  // FilePath = '${_path.default.relative('', FilePath)}'
                  ${local}
                  ${source} 
                  return __getNode(__option) 
                }`;
    return source;
  }

  static async getFunctionFromContent(content, option = {
    'path': '(anonymous)'
  }) {
    // console.log('Transform.getFunctionFromContent(content, option) { ... }')
    let source = null;
    source = await this.getFunctionSourceFromContent(content, option);
    source = await this.formatSource(source);
    let fn = null;
    eval(`fn = ${source}`);
    return fn;
  }

  static async getASTFromPath(path) {
    // console.log(`Transform.getASTFromPath('${Path.relative('', path)}') { ... }`)
    let content = await _fsExtra.default.readFile(path, {
      'encoding': 'utf-8'
    });
    let AST = this.getASTFromContent(content, {
      'path': path
    });
    return AST;
  }

  static async getSourceFromPath(path) {
    // console.log(`Transform.getSourceFromPath('${Path.relative('', path)}') { ... }`)
    let content = await _fsExtra.default.readFile(path, {
      'encoding': 'utf-8'
    });
    let source = await this.getSourceFromContent(content, {
      'path': path
    });
    return source;
  }

  static async getFunctionSourceFromPath(path) {
    // console.log('Transform.getFunctionSourceFromPath('${Path.relative('', path)}') { ... }`)
    let content = await _fsExtra.default.readFile(path, {
      'encoding': 'utf-8'
    });
    let source = await this.getFunctionSourceFromContent(content, {
      'path': path
    });
    return source;
  }

  static async getFunctionFromPath(path) {
    // console.log(`Transform.getFunctionFromPath('${Path.relative('', path)}') { ... }`)
    let content = await _fsExtra.default.readFile(path, {
      'encoding': 'utf-8'
    });
    let fn = await this.getFunctionFromContent(content, {
      'path': path
    });
    return fn;
  }

  static async createModuleFromPath(sourcePath, targetPath = `${sourcePath}${_path.default.extname(FilePath)}`, option = {
    'encoding': 'utf-8',
    'flag': 'wx'
  }) {
    // console.log(`Transform.createModuleFromPath('${Path.relative('', sourcePath)}') { ... }`)
    let source = null;
    source = await this.getFunctionSourceFromPath(sourcePath);
    source = ` import CreateVirtualNode from 'virtual-dom/h.js'
                import _ConvertToVirtualNode from 'html-to-vdom'
                import VirtualNode from 'virtual-dom/vnode/vnode.js'
                import VirtualText from 'virtual-dom/vnode/vtext.js'
                const ConvertToVirtualNode = _ConvertToVirtualNode({ 'VNode': VirtualNode, 'VText': VirtualText })
                ${source}
                export default function(__local = {}, __option = { 'createNode': CreateVirtualNode, 'convertToNode': ConvertToVirtualNode }) { 
                  // Powered by ${_package.Package.name} v${_package.Package.version}
                  // FilePath = '${_path.default.relative('', FilePath)}'
                  return __getNode(__local, __option) 
                }`;
    source = await this.formatSource(source);
    await _fsExtra.default.writeFile(targetPath, source, option); // return import(URL.pathToFileURL(targetPath))
    // return import(targetPath)
    // __transformPath does ...
    //   URL.pathToFileURL if the environment is ESModule
    //   require.resolve if the environment is CommonJS

    return Promise.resolve(`${require.resolve(targetPath)}`).then(s => _interopRequireWildcard(require(s)));
  }

  static async formatSource(source) {
    let extension = null;
    extension = _path.default.extname(FilePath);
    extension = extension.toLowerCase();
    let configuration = null;
    configuration = _json.default.parse(await _fsExtra.default.readFile(Require.resolve('./transform.babelrc.json')), {
      'encoding': 'utf-8'
    });
    configuration = configuration.env[extension === '.cjs' ? 'commonjs' : 'esmodule'];
    let {
      code: sourceOut
    } = await Babel.transformAsync(source, configuration);
    sourceOut = Format(sourceOut, {
      'arrowParens': 'always',
      'bracketSpacing': true,
      'parser': 'babel',
      'quoteProps': 'consistent',
      'semi': false,
      'singleQuote': true,
      'tabWidth': 2,
      'trailingComma': 'none'
    });
    return sourceOut;
  }

  static async _getLocalFromSource(source) {
    let configuration = _json.default.parse(await _fsExtra.default.readFile(Require.resolve('./transform.eslintrc.json')), {
      'encoding': 'utf-8'
    });

    let lint = new Lint({
      'baseConfig': configuration
    });
    let result = await lint.lintText(source);
    let pattern = /^'(.*)' is not defined.$/i;
    let local = null;
    local = result[0].messages.filter(message => message.ruleId === 'no-undef').map(message => message.message).map(message => {
      let match = null;

      if (_is.default.not.null(match = pattern.exec(message))) {
        let [, local] = match;
        return local;
      } else {
        throw new _unrecognizedMessageTransformError.UnrecognizedMessageTransformError(message);
      }
    }).reduce((accumulator, local) => {
      accumulator[local] = undefined;
      return accumulator;
    }, {});
    local = Object.keys(local);
    return local;
  }

}

exports.Transform = Transform;
//# sourceMappingURL=transform.cjs.map