#!/usr/bin/env node

import '@virtualpatterns/mablung-source-map-support/install'
import Command from 'commander'

import { Package } from '../library/package.js'
import { Transform } from '../library/transform.js'

const Process = process

Command
  .version(Package.version)

Command
  .command('create-module <source-path> [target-path]')
  .description('Create a module that returns virtual nodes')
  .action(async (sourcePath, targetPath) => {

    try {
      await Transform.createModuleFromPath(sourcePath, targetPath)
    } catch (error) {
      console.error(error)
      Process.exit(1)
    }

  })

Command.parse(Process.argv)
