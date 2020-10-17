#!/usr/bin/env node

import '@virtualpatterns/mablung-source-map-support/install';
import Command from 'commander';
import Path from 'path';
import URL from 'url';

import { Package } from '../library/package.js';

const Process = process;

Command.
version(Package.version);
// .option('--data-path <path>', 'Path of ...')

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

Command.parse(Process.argv);
//# sourceMappingURL=transform.js.map