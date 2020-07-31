"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Scenario = void 0;

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _pretty = _interopRequireDefault(require("pretty"));

var _is = _interopRequireDefault(require("@pwn/is"));

var _minimatch = _interopRequireDefault(require("minimatch"));

var _pug = _interopRequireDefault(require("pug"));

var _createElement = _interopRequireDefault(require("virtual-dom/create-element.js"));

var _index = require("../../index.cjs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// const ConvertToVirtualNode = _ConvertToVirtualNode({ 'VNode': VirtualNode, 'VText': VirtualText })
class Scenario {
  constructor(path, local = {}) {
    this._path = path;
    this._local = local;
    let modifierPattern = /\.(.*?)\./g;
    let modifier = [];
    let match = null;

    while (_is.default.not.null(match = modifierPattern.exec(path))) {
      modifier.push(match[1]);
      modifierPattern.lastIndex--;
    }

    this._modifier = modifier;
  }

  get path() {
    return this._path;
  }

  get local() {
    return this._local;
  }

  get modifier() {
    return this._modifier;
  }

  async getHTML() {
    let realHTML = null;
    realHTML = _pug.default.compileFile(this._path)(this._local);
    realHTML = (0, _pretty.default)(realHTML); // let virtualNode = (await Transform.getFunctionFromPath(this._path))(this._local, { 'createNode': CreateVirtualNode, 'convertToNode': ConvertToVirtualNode })

    let module = await _index.Transform.createModuleFromPath(this._path);
    let virtualFn = module.default;
    let virtualNode = virtualFn(this._local);
    let virtualHTML = null;
    virtualHTML = virtualNode.map(virtualNode => (0, _createElement.default)(virtualNode).toString());
    virtualHTML = virtualHTML.join('');
    virtualHTML = (0, _pretty.default)(virtualHTML);
    return {
      realHTML,
      virtualHTML
    };
  }

  static async createScenarioFromFolder(path, includePattern = ['*.pug'], excludePattern = ['*.skip.pug']) {
    let item = await _fsExtra.default.readdir(path, {
      'encoding': 'utf-8',
      'withFileTypes': true
    });
    let createScenario = [];
    createScenario = createScenario.concat(item.filter(item => item.isDirectory()).map(folder => this.createScenarioFromFolder(`${path}/${folder.name}`, includePattern, excludePattern)));
    createScenario = createScenario.concat(item.filter(item => item.isFile()).filter(file => includePattern.reduce((isMatch, pattern) => isMatch ? isMatch : (0, _minimatch.default)(file.name, pattern), false)).filter(file => !excludePattern.reduce((isMatch, pattern) => isMatch ? isMatch : (0, _minimatch.default)(file.name, pattern), false)).map(file => this.createScenarioFromFile(`${path}/${file.name}`)));
    let scenario = await Promise.all(createScenario);
    return scenario.flat();
  }

  static async createScenarioFromFile(path) {
    let localPath = `${path}.js`;
    let local = {};

    if (await _fsExtra.default.pathExists(localPath)) {
      let module = null;
      module = await Promise.resolve(`${localPath}`).then(s => _interopRequireWildcard(require(s)));
      module = module.default || module;
      local = module;
    }

    return new Scenario(path, local);
  }

}

exports.Scenario = Scenario;
//# sourceMappingURL=scenario.cjs.map