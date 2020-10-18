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

var _minimatch = _interopRequireDefault(require("minimatch"));

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

// import URL from 'url'
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
    let blockSource = await blockNode.getSource(); // if (TagNode.__createNode.isCalled) {
    //   source = `  ${source}
    //               function ${TagNode.__getNodeName.toString().replace(pattern, '')}
    //               function ${TagNode.__getNodeProperty.toString().replace(pattern, '')}
    //               function ${TagNode.__getChildNode.toString().replace(pattern, '')}
    //               function ${TagNode.__createNode.toString().replace(pattern, '')}`
    // }
    // if (AttributeNode.__addAttribute.isCalled) {
    //   source = `  ${source}
    //               function ${AttributeNode.__getAttributeName.toString().replace(pattern, '')}
    //               function ${AttributeNode.__getAttributeValue.toString().replace(pattern, '')}
    //               function ${AttributeNode.__addAttribute.toString().replace(pattern, '')}`
    // }
    // if (EachNode.__forEach.isCalled) {
    //   source = `  ${source}
    //               function ${EachNode.__forEach.toString().replace(pattern, '')}`
    // }
    // if (AndAttributeNode.__addAndAttribute.isCalled) {
    //   source = `  ${source}
    //               function ${AndAttributeNode.__addAndAttribute.toString().replace(pattern, '')}`
    // }

    let source = null;
    source = `  function __getNode(__option = {}) { 
                  const __node = []
                  ${blockSource}
                  return __node
                }`;
    let local = null;
    let countOfLocal = null;
    let pattern = /eslint-disable-line no-undef/gi;

    do {
      local = await this._getLocalFromSource(source);
      countOfLocal = local.length;

      if (local.includes('__createNode')) {
        source = `  function ${_tagNode.default.__getNodeName.toString().replace(pattern, '')}
                    function ${_tagNode.default.__getNodeProperty.toString().replace(pattern, '')}
                    function ${_tagNode.default.__getChildNode.toString().replace(pattern, '')}
                    function ${_tagNode.default.__createNode.toString().replace(pattern, '')}
                    ${source}`;
        local = local.filter(local => local !== '__createNode');
      }

      if (local.includes('__addAttribute')) {
        source = `  function ${_attributeNode.default.__getAttributeName.toString().replace(pattern, '')}
                    function ${_attributeNode.default.__getAttributeValue.toString().replace(pattern, '')}
                    function ${_attributeNode.default.__addAttribute.toString().replace(pattern, '')}
                    ${source}`;
        local = local.filter(local => local !== '__addAttribute');
      }

      if (local.includes('__forEach')) {
        source = `  function ${_eachNode.default.__forEach.toString().replace(pattern, '')}
                    ${source}`;
        local = local.filter(local => local !== '__forEach');
      }

      if (local.includes('__addAndAttribute')) {
        source = `  function ${_andAttributeNode.default.__addAndAttribute.toString().replace(pattern, '')}
                    ${source}`;
        local = local.filter(local => local !== '__addAndAttribute');
      }
    } while (local.length < countOfLocal);

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

  static async getModuleSourceFromContent(content, option = {
    'path': '(anonymous)'
  }) {
    // console.log('Transform.getModuleSourceFromContent(content, option) { ... }')
    let source = null;
    source = await this.getFunctionSourceFromContent(content, option);
    source = ` // Powered by ${_package.Package.name} v${_package.Package.version}
                // FilePath = '${_path.default.relative('', FilePath)}'
                import CreateVirtualNode from 'virtual-dom/h.js'
                import _ConvertToVirtualNode from 'html-to-vdom'
                import VirtualNode from 'virtual-dom/vnode/vnode.js'
                import VirtualText from 'virtual-dom/vnode/vtext.js'
                const ConvertToVirtualNode = _ConvertToVirtualNode({ 'VNode': VirtualNode, 'VText': VirtualText })
                ${source}
                export default function(__local = {}, __option = { 'createNode': CreateVirtualNode, 'convertToNode': ConvertToVirtualNode }) { 
                  return __getNode(__local, __option) 
                }`;
    return source;
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

  static async getModuleSourceFromPath(path) {
    // console.log('Transform.getModuleSourceFromPath('${Path.relative('', path)}') { ... }`)
    let content = await _fsExtra.default.readFile(path, {
      'encoding': 'utf-8'
    });
    let source = await this.getModuleSourceFromContent(content, {
      'path': path
    });
    return source;
  }

  static async createModuleFromPath(sourcePath, targetPath = _fsExtra.default.statSync(sourcePath).isDirectory() ? sourcePath : `${_path.default.dirname(sourcePath)}/${_path.default.basename(sourcePath, _path.default.extname(sourcePath))}${_path.default.extname(FilePath)}`, option = {
    'encoding': 'utf-8',
    'flag': 'wx'
  }) {
    // console.log(`Transform.createModuleFromPath('${Path.relative('', sourcePath)}', '${Path.relative('', targetPath)}', option) { ... }`)
    let sourceInformation = await _fsExtra.default.stat(sourcePath);

    if (sourceInformation.isDirectory()) {
      let includePattern = ['*.pug'];
      let excludePattern = ['*.skip.pug'];
      let item = await _fsExtra.default.readdir(sourcePath, {
        'encoding': 'utf-8',
        'withFileTypes': true
      });
      let createModule = [];
      createModule = createModule.concat(item.filter(item => item.isDirectory()).map(folder => this.createModuleFromPath(`${sourcePath}/${folder.name}`, `${targetPath}/${folder.name}`, option)));
      createModule = createModule.concat(item.filter(item => item.isFile()).filter(file => includePattern.reduce((isMatch, pattern) => isMatch ? isMatch : (0, _minimatch.default)(file.name, pattern), false)).filter(file => !excludePattern.reduce((isMatch, pattern) => isMatch ? isMatch : (0, _minimatch.default)(file.name, pattern), false)).map(file => this.createModuleFromPath(`${sourcePath}/${file.name}`, `${targetPath}/${_path.default.basename(file.name, _path.default.extname(file.name))}${_path.default.extname(FilePath)}`), option));
      return Promise.all(createModule);
    } else {
      let isCreated = false;

      if (await _fsExtra.default.pathExists(targetPath)) {
        let targetInformation = await _fsExtra.default.stat(targetPath);

        if (sourceInformation.mtime > targetInformation.mtime) {
          isCreated = true;
        }
      } else {
        isCreated = true;
      }

      if (isCreated) {
        let source = null;
        source = await this.getModuleSourceFromPath(sourcePath);
        source = await this.formatSource(source, _path.default.extname(targetPath).toUpperCase() === '.CJS' ? 'commonjs' : 'esmodule');
        await _fsExtra.default.ensureDir(_path.default.dirname(targetPath)); // console.log(`await FileSystem.writeFile('${Path.relative('', targetPath)}', source, option)`)

        return _fsExtra.default.writeFile(targetPath, source, option);
      }
    }
  }

  static async formatSource(source, environment = _path.default.extname(FilePath).toUpperCase() === '.CJS' ? 'commonjs' : 'esmodule') {
    let configuration = null;
    configuration = _json.default.parse(await _fsExtra.default.readFile(Require.resolve('./transform.babelrc.json')), {
      'encoding': 'utf-8'
    });
    configuration = configuration.env[environment];
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