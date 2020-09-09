import { createRequire as _createRequire } from "module";import _URL from "url";import Bundler from 'parcel-bundler';
import FileSystem from 'fs-extra';
import Path from 'path';
import Browser from 'puppeteer';
import Server from 'live-server';
import Test from 'ava';

import { Transform } from '../../index.js';

const FilePath = _URL.fileURLToPath(import.meta.url);
const FolderPath = Path.dirname(FilePath);
const Require = _createRequire(import.meta.url);

Test.before(async test => {

  let sourcePath = null;
  let targetPath = null;

  sourcePath = Require.resolve('./www/script/element.pug');
  targetPath = `${sourcePath}${Path.extname(FilePath)}`;

  await Transform.createModuleFromPath(sourcePath, targetPath);

  [sourcePath, targetPath] = [targetPath, `${sourcePath}.js`];

  if (sourcePath !== targetPath) {
    await FileSystem.move(sourcePath, targetPath);
  }

  await new Bundler(Require.resolve('./www/index.html'), {
    'cache': false,
    'logLevel': 2,
    'minify': false,
    'outDir': `${FolderPath}/www-bundle`,
    'target': 'browser',
    'watch': false }).
  bundle();

  let host = '0.0.0.0';
  let port = Path.extname(FilePath) === '.cjs' ? 8080 : 8081;

  Server.start({
    'host': host,
    'port': port,
    'logLevel': 0,
    'mount': [
    ['/', `${FolderPath}/www-bundle`],
    ['/favicon.ico', `${FolderPath}/www/resource/application.ico`]],

    'open': false });


  test.context.url = `http://${host}:${port}/index.html`;

});

Test('page.$$(\'li.element\')', async test => {

  let browser = await Browser.launch();

  try {

    let page = await browser.newPage();
    await page.goto(test.context.url);

    // await page.screenshot({path: 'example.png'})

    let element = await page.$$('li.element');
    let item = await Promise.all(element.map(element => element.evaluate(node => node.dataset.item)));

    test.deepEqual(item, ['a', 'ab', 'bb', 'cb', 'c']);

  } finally {
    await browser.close();
  }

});

Test.after.always(() => {
  Server.shutdown();
});
//# sourceMappingURL=transform-create-module-from-path.test.js.map