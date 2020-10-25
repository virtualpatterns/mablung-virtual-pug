"use strict";

var _puppeteer = _interopRequireDefault(require("puppeteer"));

var _esbuild = _interopRequireDefault(require("esbuild"));

var _path = _interopRequireDefault(require("path"));

var _liveServer = _interopRequireDefault(require("live-server"));

var _ava = _interopRequireDefault(require("ava"));

var _index = require("../../index.cjs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  'build': Bundle
} = _esbuild.default;
const FilePath = __filename;

const FolderPath = _path.default.dirname(FilePath);

const Require = require;
(0, _ava.default)('createModuleFromPath(sourcePath, targetPath, option) using browser', async test => {
  let sourcePath = null;
  let targetPath = null;
  sourcePath = `${FolderPath}/www/script/element.pug`;
  targetPath = `${FolderPath}/www/script/element.js`;
  await _index.Transform.createModuleFromPath(sourcePath, targetPath, {
    'utility': _path.default.relative(_path.default.dirname(sourcePath), Require.resolve("../../library/utility.cjs"))
  });
  let preIndexPath = `${FolderPath}/www/script/pre-index.js`;
  let postIndexPath = `${FolderPath}/www/script/post-index.js`;
  await Bundle({
    'entryPoints': [preIndexPath],
    'outfile': postIndexPath,
    'minify': false,
    'bundle': true
  });
  let host = '0.0.0.0';
  let port = _path.default.extname(FilePath) === '.cjs' ? 8080 : 8081;

  _liveServer.default.start({
    'host': host,
    'port': port,
    'logLevel': 0,
    'mount': [['/', `${FolderPath}/www`], ['/favicon.ico', `${FolderPath}/www/resource/application.ico`]],
    'open': false
  });

  try {
    let browser = await _puppeteer.default.launch();

    try {
      let page = await browser.newPage(); // page.on('console', (message) => {
      //   test.log(message.args()[0].toString())
      // })

      await page.goto(`http://${host}:${port}/index.html`);
      let element = await page.$$('li.element');
      let item = await Promise.all(element.map(element => element.evaluate(node => node.dataset.item)));
      test.deepEqual(item, ['a', 'ab', 'bb', 'cb', 'c']);
    } finally {
      await browser.close();
    }
  } finally {
    _liveServer.default.shutdown();
  }
});
//# sourceMappingURL=transform-create-module-from-path-01.test.cjs.map