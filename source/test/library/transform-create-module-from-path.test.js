import _Bundler from 'esbuild'
import Path from 'path'
import Browser from 'puppeteer'
import Server from 'live-server'
import Test from 'ava'

import { Transform } from '../../index.js'

const { 'build': Bundle } = _Bundler
const FilePath = __filePath
const FolderPath = Path.dirname(FilePath)
const Require = __require

Test.before(async (test) => {
  
  let sourcePath = null
  let targetPath = null

  sourcePath = `${FolderPath}/www/script/element.pug`
  targetPath = `${FolderPath}/www/script/element.js`

  await Transform.createModuleFromPath(sourcePath, targetPath, { 'utility': Path.relative(Path.dirname(sourcePath), Require.resolve('../../library/utility.js')) })

  // await (new Bundler(Require.resolve('./www/index.html'), {
  //   'cache': false,
  //   'logLevel': 2,
  //   'minify': false,
  //   'outDir': `${FolderPath}/www-bundle`,
  //   'target': 'browser',
  //   'watch': false
  // })).bundle()

  let inPath = `${FolderPath}/www/script/pre-index.js`
  let outPath = `${FolderPath}/www/script/post-index.js`

  Bundle({
    'entryPoints': [ inPath ],
    'outfile': outPath,
    'minify': false,
    'bundle': true
  })
  
  let host = '0.0.0.0'
  let port = Path.extname(FilePath) === '.cjs' ? 8080 : 8081

  Server.start({
    'host': host,
    'port': port,
    'logLevel': 0,
    'mount': [
      [ '/', `${FolderPath}/www` ],
      [ '/favicon.ico', `${FolderPath}/www/resource/application.ico` ]
    ],
    'open': false
  })

  test.context.url = `http://${host}:${port}/index.html`

})

Test('page.$$(\'li.element\')', async (test) => {

  let browser = await Browser.launch()

  try {
  
    let page = await browser.newPage()

    // page.on('console', (message) => {
    //   test.log(message.args()[0].toString())
    // })

    await page.goto(test.context.url)

    let element = await page.$$('li.element')
    let item = await Promise.all(element.map((element) => element.evaluate((node) => node.dataset.item)))

    test.deepEqual(item, [ 'a', 'ab', 'bb', 'cb', 'c' ])
     
  } finally {
    await browser.close()
  }

})

Test.after.always(() => {
  Server.shutdown()
})
