"use strict";

var _esbuild = _interopRequireDefault(require("esbuild"));

var _path = _interopRequireDefault(require("path"));

var _puppeteer = _interopRequireDefault(require("puppeteer"));

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

_ava.default.before(async test => {
  let sourcePath = null;
  let targetPath = null;
  sourcePath = `${FolderPath}/www/script/element.pug`;
  targetPath = `${FolderPath}/www/script/element.js`;
  await _index.Transform.createModuleFromPath(sourcePath, targetPath, {
    'utility': _path.default.relative(_path.default.dirname(sourcePath), Require.resolve("../../library/utility.cjs"))
  }); // await (new Bundler(Require.resolve('./www/index.html'), {
  //   'cache': false,
  //   'logLevel': 2,
  //   'minify': false,
  //   'outDir': `${FolderPath}/www-bundle`,
  //   'target': 'browser',
  //   'watch': false
  // })).bundle()

  let inPath = `${FolderPath}/www/script/pre-index.js`;
  let outPath = `${FolderPath}/www/script/post-index.js`;
  Bundle({
    'entryPoints': [inPath],
    'outfile': outPath,
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

  test.context.url = `http://${host}:${port}/index.html`;
});

(0, _ava.default)('page.$$(\'li.element\')', async test => {
  let browser = await _puppeteer.default.launch();

  try {
    let page = await browser.newPage(); // page.on('console', (message) => {
    //   test.log(message.args()[0].toString())
    // })

    await page.goto(test.context.url);
    let element = await page.$$('li.element');
    let item = await Promise.all(element.map(element => element.evaluate(node => node.dataset.item)));
    test.deepEqual(item, ['a', 'ab', 'bb', 'cb', 'c']);
  } finally {
    await browser.close();
  }
});

_ava.default.after.always(() => {
  _liveServer.default.shutdown();
});
//# sourceMappingURL=transform-create-module-from-path.test.cjs.map