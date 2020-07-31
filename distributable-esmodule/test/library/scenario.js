import FileSystem from 'fs-extra';
import Format from 'pretty';
import Is from '@pwn/is';
import Match from 'minimatch';
import Pug from 'pug';

import CreateRealNode from 'virtual-dom/create-element.js';
// import CreateVirtualNode from 'virtual-dom/h.js'

// import _ConvertToVirtualNode from 'html-to-vdom'
// import VirtualNode from 'virtual-dom/vnode/vnode.js'
// import VirtualText from 'virtual-dom/vnode/vtext.js'

import { Transform } from '../../index.js';

// const ConvertToVirtualNode = _ConvertToVirtualNode({ 'VNode': VirtualNode, 'VText': VirtualText })

class Scenario {

  constructor(path, local = {}) {

    this._path = path;
    this._local = local;

    let modifierPattern = /\.(.*?)\./g;
    let modifier = [];

    let match = null;

    while (Is.not.null(match = modifierPattern.exec(path))) {
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
    realHTML = Pug.compileFile(this._path)(this._local);
    realHTML = Format(realHTML);

    // let virtualNode = (await Transform.getFunctionFromPath(this._path))(this._local, { 'createNode': CreateVirtualNode, 'convertToNode': ConvertToVirtualNode })
    let module = await Transform.createModuleFromPath(this._path);
    let virtualFn = module.default;
    let virtualNode = virtualFn(this._local);

    let virtualHTML = null;
    virtualHTML = virtualNode.map(virtualNode => CreateRealNode(virtualNode).toString());
    virtualHTML = virtualHTML.join('');
    virtualHTML = Format(virtualHTML);

    return {
      realHTML,
      virtualHTML };

  }

  static async createScenarioFromFolder(path, includePattern = ['*.pug'], excludePattern = ['*.skip.pug']) {

    let item = await FileSystem.readdir(path, { 'encoding': 'utf-8', 'withFileTypes': true });

    let createScenario = [];

    createScenario = createScenario.concat(item.
    filter(item => item.isDirectory()).
    map(folder => this.createScenarioFromFolder(`${path}/${folder.name}`, includePattern, excludePattern)));

    createScenario = createScenario.concat(item.
    filter(item => item.isFile()).
    filter(file => includePattern.reduce((isMatch, pattern) => isMatch ? isMatch : Match(file.name, pattern), false)).
    filter(file => !excludePattern.reduce((isMatch, pattern) => isMatch ? isMatch : Match(file.name, pattern), false)).
    map(file => this.createScenarioFromFile(`${path}/${file.name}`)));

    let scenario = await Promise.all(createScenario);

    return scenario.flat();

  }

  static async createScenarioFromFile(path) {

    let localPath = `${path}.js`;
    let local = {};

    if (await FileSystem.pathExists(localPath)) {

      let module = null;
      module = await import(localPath);
      module = module.default || module;

      local = module;

    }

    return new Scenario(path, local);

  }}



export { Scenario };
//# sourceMappingURL=scenario.js.map