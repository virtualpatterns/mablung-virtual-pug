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

var _deepmerge = _interopRequireDefault(require("deepmerge"));

var _pugParser = _interopRequireDefault(require("pug-parser"));

var _path = _interopRequireDefault(require("path"));

var _package = require("./package.cjs");

var _blockNode = _interopRequireDefault(require("./node/block-node.cjs"));

var _unrecognizedMessageTransformError = require("./error/unrecognized-message-transform-error.cjs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const {
  'ESLint': Lint
} = _eslint.default;
const {
  'format': Format
} = _prettier.default;
const Babel = ModuleBabel.default || ModuleBabel;
const FilePath = __filename;
const Require = require;

class Transform {
  static getASTFromContent(content, option = {
    'path': '(unknown)'
  }) {
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
    'path': '(unknown)'
  }) {
    let AST = this.getASTFromContent(content, option);
    let blockNode = new _blockNode.default(AST, option);
    let blockSource = await blockNode.getSource();
    let source = `  function __getNode(__utility = {}) { 
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
    'path': '(unknown)'
  }) {
    let {
      source,
      local
    } = await this.getSourceFromContent(content, option);
    local = local.map(local => `const { ${local} } = __local`).join('\n');
    source = ` function __getNode(__local = {}, __utility = {}) {
                  ${local}
                  ${source} 
                  return __getNode(__utility) 
                }`;
    return source;
  }

  static async getFunctionFromContent(content, option = {
    'path': '(unknown)'
  }) {
    let source = null;
    source = await this.getFunctionSourceFromContent(content, option);
    source = await this.formatSource(source);
    let fn = null;
    eval(`fn = ${source}`);
    return fn;
  }

  static async getModuleSourceFromContent(content, userOption = {}) {
    let defaultOption = {
      'path': '(unknown)',
      'utility': '@virtualpatterns/mablung-virtual-pug/utility'
    };
    let option = (0, _deepmerge.default)(defaultOption, userOption);
    let source = null;
    source = await this.getFunctionSourceFromContent(content, {
      'path': option.path
    });
    source = ` // Created by ${_package.Package.name} v${_package.Package.version}
                // Path = ${option.path === '(unknown)' ? option.path : `'${_path.default.relative('', option.path)}'`}
                import Utility from '${option.utility}'
                ${source}
                export default function(__local = {}, __utility = Utility) { 
                  return __getNode(__local, __utility) 
                }`;
    return source;
  }

  static async getASTFromPath(path) {
    let content = await _fsExtra.default.readFile(path, {
      'encoding': 'utf-8'
    });
    let AST = this.getASTFromContent(content, {
      'path': path
    });
    return AST;
  }

  static async getSourceFromPath(path) {
    let content = await _fsExtra.default.readFile(path, {
      'encoding': 'utf-8'
    });
    let source = await this.getSourceFromContent(content, {
      'path': path
    });
    return source;
  }

  static async getFunctionSourceFromPath(path) {
    let content = await _fsExtra.default.readFile(path, {
      'encoding': 'utf-8'
    });
    let source = await this.getFunctionSourceFromContent(content, {
      'path': path
    });
    return source;
  }

  static async getFunctionFromPath(path) {
    let content = await _fsExtra.default.readFile(path, {
      'encoding': 'utf-8'
    });
    let fn = await this.getFunctionFromContent(content, {
      'path': path
    });
    return fn;
  }

  static async getModuleSourceFromPath(path, option) {
    let content = await _fsExtra.default.readFile(path, {
      'encoding': 'utf-8'
    });
    let source = await this.getModuleSourceFromContent(content, { ...option,
      'path': path
    });
    return source;
  }

  static async createModuleFromPath(sourcePath, targetPath = _fsExtra.default.statSync(sourcePath).isDirectory() ? sourcePath : `${_path.default.dirname(sourcePath)}/${_path.default.basename(sourcePath, _path.default.extname(sourcePath))}${_path.default.extname(FilePath)}`, userOption = {}) {
    let defaultOption = {
      'encoding': 'utf-8',
      'flag': 'wx'
    };
    let option = (0, _deepmerge.default)(defaultOption, userOption);
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
      createModule = createModule.concat(item.filter(item => item.isFile()).filter(file => includePattern.reduce((isMatch, pattern) => isMatch ? isMatch : (0, _minimatch.default)(file.name, pattern), false)).filter(file => !excludePattern.reduce((isMatch, pattern) => isMatch ? isMatch : (0, _minimatch.default)(file.name, pattern), false)).map(file => this.createModuleFromPath(`${sourcePath}/${file.name}`, `${targetPath}/${_path.default.basename(file.name, _path.default.extname(file.name))}${_path.default.extname(FilePath)}`, option)));
      return Promise.all(createModule);
    } else {
      let isCreated = false;

      if (await _fsExtra.default.pathExists(targetPath)) {
        let targetInformation = await _fsExtra.default.stat(targetPath); // console.log(`Existing '${Path.relative('', targetPath)}' ...`)
        // console.log(`Source ${sourceInformation.mtime}`)
        // console.log(`Target ${targetInformation.mtime}`)

        if (sourceInformation.mtime >= targetInformation.mtime) {
          isCreated = true;
        }
      } else {
        isCreated = true;
      }

      if (isCreated) {
        let source = null;
        source = await this.getModuleSourceFromPath(sourcePath, option);
        source = await this.formatSource(source, _path.default.extname(targetPath).toUpperCase() === '.CJS' ? 'commonjs' : 'esmodule'); // console.log(`Creating '${Path.relative('', targetPath)}' ...`)

        await _fsExtra.default.ensureDir(_path.default.dirname(targetPath));
        return _fsExtra.default.writeFile(targetPath, source, {
          'encoding': option.encoding,
          'flag': option.flag
        });
      } else {
        return Promise.resolve();
      }
    }
  }

  static async formatSource(sourceIn, environment = _path.default.extname(FilePath).toUpperCase() === '.CJS' ? 'commonjs' : 'esmodule') {
    let configuration = null;
    configuration = _json.default.parse(await _fsExtra.default.readFile(Require.resolve('./transform.babelrc.json')), {
      'encoding': 'utf-8'
    });
    configuration = configuration.env[environment];
    let {
      'code': sourceOut
    } = await Babel.transformAsync(sourceIn, configuration);
    sourceOut = Format(sourceOut, {
      'arrowParens': 'always',
      'bracketSpacing': true,
      'parser': 'babel',
      'quoteProps': 'preserve',
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