import _URL2 from "url";import _URL from "url";import FileSystem from 'fs-extra';
import Format from 'pretty';
import Is from '@pwn/is';
import Match from 'minimatch';
import Path from 'path';
import Pug from 'pug';

import CreateRealNode from 'virtual-dom/create-element.js';

import { Transform } from '../../index.js';

const FilePath = _URL.fileURLToPath(import.meta.url);

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

    let sourcePath = this._path;
    let targetPath = `${Path.dirname(sourcePath)}/${Path.basename(sourcePath, Path.extname(sourcePath))}${Path.extname(FilePath)}`; // `${sourcePath}${Path.extname(FilePath)}`

    await Transform.createModuleFromPath(sourcePath, targetPath);

    // __transformPath does ...
    //   URL.pathToFileURL if the environment is ESModule
    //   require.resolve if the environment is CommonJS
    let module = await import(_URL2.pathToFileURL(targetPath));
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