#!/usr/bin/env node
"use strict";

require("@virtualpatterns/mablung-source-map-support/install");

var _commander = _interopRequireDefault(require("commander"));

var _package = require("../library/package.cjs");

var _transform = require("../library/transform.cjs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Process = process;

_commander.default.version(_package.Package.version);

_commander.default.command('create-module <source-path> [target-path]').description('Create a module that returns virtual nodes').action(async (sourcePath, targetPath) => {
  try {
    await _transform.Transform.createModuleFromPath(sourcePath, targetPath);
  } catch (error) {
    console.error(error);
    Process.exit(1);
  }
});

_commander.default.parse(Process.argv);
//# sourceMappingURL=transform.cjs.map