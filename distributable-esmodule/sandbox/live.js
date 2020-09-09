import { createRequire as _createRequire } from "module";import _URL from "url";import Bundler from 'parcel-bundler';
import FileSystem from 'fs-extra';
import Path from 'path';
import Server from 'live-server';

import { Transform } from '../index.js';

const FilePath = _URL.fileURLToPath(import.meta.url);
const FolderPath = Path.dirname(FilePath);
const Require = _createRequire(import.meta.url);

async function main() {

  try {

    let sourcePath = null;
    sourcePath = Require.resolve('./www/script/element.pug');

    let targetPath = null;
    targetPath = `${sourcePath}${Path.extname(FilePath)}`;

    await Transform.createModuleFromPath(sourcePath, targetPath);

    [sourcePath, targetPath] = [targetPath, `${sourcePath}.js`];

    if (sourcePath !== targetPath) {
      await FileSystem.move(targetPath, `${sourcePath}.js`);
    }

    await new Bundler(Require.resolve('./www/index.html'), {
      'cache': false,
      'logLevel': 4,
      'minify': false,
      'outDir': `${FolderPath}/www-bundle`,
      'target': 'browser',
      'watch': false }).
    bundle();

    Server.start({
      'logLevel': 2,
      'mount': [
      ['/', `${FolderPath}/www-bundle`],
      ['/favicon.ico', `${FolderPath}/www/resource/application.ico`]],

      'open': false });


  } catch (error) {
    console.log('-'.repeat(80));
    console.error(error);
    console.log('-'.repeat(80));
  }

}

main();
//# sourceMappingURL=live.js.map