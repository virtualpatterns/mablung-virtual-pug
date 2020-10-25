import Browser from 'puppeteer'
import _Bundler from 'esbuild'
import Path from 'path'
import Server from 'live-server'
import Test from 'ava'

import { Transform } from '../../index.js'

const { 'build': Bundle } = _Bundler
const FilePath = __filePath
const FolderPath = Path.dirname(FilePath)
const Require = __require

Test('createModuleFromPath(sourcePath, targetPath, option) using browser', async (test) => {
  
  let sourcePath = null
  let targetPath = null

  sourcePath = `${FolderPath}/www/script/element.pug`
  targetPath = `${FolderPath}/www/script/element.js`

  await Transform.createModuleFromPath(sourcePath, targetPath, { 'utility': Path.relative(Path.dirname(sourcePath), Require.resolve('../../library/utility.js')) })

  let preIndexPath = `${FolderPath}/www/script/pre-index.js`
  let postIndexPath = `${FolderPath}/www/script/post-index.js`

  await Bundle({
    'entryPoints': [ preIndexPath ],
    'outfile': postIndexPath,
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

  try {
    
    let browser = await Browser.launch()

    try {
    
      let page = await browser.newPage()

      // page.on('console', (message) => {
      //   test.log(message.args()[0].toString())
      // })

      await page.goto(`http://${host}:${port}/index.html`)

      let element = await page.$$('li.element')
      let item = await Promise.all(element.map((element) => element.evaluate((node) => node.dataset.item)))

      test.deepEqual(item, [ 'a', 'ab', 'bb', 'cb', 'c' ])
      
    } finally {
      await browser.close()
    }

  } finally {
    Server.shutdown()
  }

})
