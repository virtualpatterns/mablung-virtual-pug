#!/usr/bin/env node
"use strict";

require("@virtualpatterns/mablung-source-map-support/install");

var _commander = _interopRequireDefault(require("commander"));

var _path = _interopRequireDefault(require("path"));

var _url = _interopRequireDefault(require("url"));

var _package = require("../library/package.cjs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Process = process;

_commander.default.version(_package.Package.version); // .option('--data-path <path>', 'Path of ...')
// Command
//   .command('')
//   .description('...')
//   .action(async (parameter) => {
//     try {
//     } catch (error) {
//       console.error(error)
//       Process.exit(1)
//     }
//   })


_commander.default.parse(Process.argv);
//# sourceMappingURL=transform.cjs.map