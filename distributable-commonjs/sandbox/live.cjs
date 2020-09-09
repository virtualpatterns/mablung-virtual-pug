"use strict";

var _parcelBundler = _interopRequireDefault(require("parcel-bundler"));

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _path = _interopRequireDefault(require("path"));

var _liveServer = _interopRequireDefault(require("live-server"));

var _index = require("../index.cjs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const FilePath = __filename;

const FolderPath = _path.default.dirname(FilePath);

const Require = require;

async function main() {
  try {
    let sourcePath = null;
    sourcePath = Require.resolve('./www/script/element.pug');
    let targetPath = null;
    targetPath = `${sourcePath}${_path.default.extname(FilePath)}`;
    await _index.Transform.createModuleFromPath(sourcePath, targetPath);
    [sourcePath, targetPath] = [targetPath, `${sourcePath}.js`];

    if (sourcePath !== targetPath) {
      await _fsExtra.default.move(targetPath, `${sourcePath}.js`);
    }

    await new _parcelBundler.default(Require.resolve('./www/index.html'), {
      'cache': false,
      'logLevel': 4,
      'minify': false,
      'outDir': `${FolderPath}/www-bundle`,
      'target': 'browser',
      'watch': false
    }).bundle();

    _liveServer.default.start({
      'logLevel': 2,
      'mount': [['/', `${FolderPath}/www-bundle`], ['/favicon.ico', `${FolderPath}/www/resource/application.ico`]],
      'open': false
    });
  } catch (error) {
    console.log('-'.repeat(80));
    console.error(error);
    console.log('-'.repeat(80));
  }
}

main();
//# sourceMappingURL=live.cjs.map