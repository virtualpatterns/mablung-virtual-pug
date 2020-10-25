import '@virtualpatterns/mablung-source-map-support/install'
import _Bundler from 'esbuild'
import Path from 'path'

const { 'build': Bundle } = _Bundler
const FilePath = __filePath
const Require = __require

async function main() {

  try {

    await Bundle({
      'entryPoints': [ Require.resolve('../library/utility.js') ],
      'outfile': `process/esbuild${Path.extname(FilePath)}`,
      'minify': false,
      'bundle': true
    })
    
  } catch (error) {
    console.error(error)
  }

}

main()