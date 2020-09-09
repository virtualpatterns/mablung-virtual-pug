"use strict";

var _parcelBundler = _interopRequireDefault(require("parcel-bundler"));

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _path = _interopRequireDefault(require("path"));

var _puppeteer = _interopRequireDefault(require("puppeteer"));

var _liveServer = _interopRequireDefault(require("live-server"));

var _ava = _interopRequireDefault(require("ava"));

var _index = require("../../index.cjs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const FilePath = __filename;

const FolderPath = _path.default.dirname(FilePath);

const Require = require;

_ava.default.before(async test => {
  let sourcePath = null;
  let targetPath = null;
  sourcePath = Require.resolve('./www/script/element.pug');
  targetPath = `${sourcePath}${_path.default.extname(FilePath)}`;
  await _index.Transform.createModuleFromPath(sourcePath, targetPath);
  [sourcePath, targetPath] = [targetPath, `${sourcePath}.js`];

  if (sourcePath !== targetPath) {
    await _fsExtra.default.move(sourcePath, targetPath);
  }

  await new _parcelBundler.default(Require.resolve('./www/index.html'), {
    'cache': false,
    'logLevel': 2,
    'minify': false,
    'outDir': `${FolderPath}/www-bundle`,
    'target': 'browser',
    'watch': false
  }).bundle();
  let host = '0.0.0.0';
  let port = _path.default.extname(FilePath) === '.cjs' ? 8080 : 8081;

  _liveServer.default.start({
    'host': host,
    'port': port,
    'logLevel': 0,
    'mount': [['/', `${FolderPath}/www-bundle`], ['/favicon.ico', `${FolderPath}/www/resource/application.ico`]],
    'open': false
  });

  test.context.url = `http://${host}:${port}/index.html`;
});

(0, _ava.default)('page.$$(\'li.element\')', async test => {
  let browser = await _puppeteer.default.launch();

  try {
    let page = await browser.newPage();
    await page.goto(test.context.url); // await page.screenshot({path: 'example.png'})

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