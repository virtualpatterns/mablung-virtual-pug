import DefaultBabel, * as ModuleBabel from '@babel/core'
import ESLint from 'eslint'
import FileSystem from 'fs-extra'
import _Format from 'prettier'
import Is from '@pwn/is'
import JSON5 from 'json5'
import Lex from 'pug-lexer'
import Link from 'pug-linker'
import Load from 'pug-load'
import Match from 'minimatch'
import Parse from 'pug-parser'
import Path from 'path'
// import URL from 'url'

import AndAttributeNode from './node/and-attribute-node.js'
import AttributeNode from './node/attribute-node.js'
import BlockNode from './node/block-node.js'
import EachNode from './node/each-node.js'
import TagNode from './node/tag-node.js'
import { Package } from './package.js'

import { UnrecognizedMessageTransformError } from './error/unrecognized-message-transform-error.js'

const Babel = DefaultBabel || ModuleBabel
const { ESLint: Lint } = ESLint
const FilePath = __filePath
const { format: Format } = _Format
const Require = __require

class Transform {
  
  static getASTFromContent(content, option = { 'path': '(anonymous)' }) {
    // console.log('Transform.getASTFromContent(content, option) { ... }')

    let lexerOutput = Lex(content, { 'filename': option.path })
    let parserOutput = Parse(lexerOutput, { 'filename': option.path })
    let loaderOutput = Load(parserOutput, { 'lex': Lex, 'parse': Parse })
    let AST = Link(loaderOutput)

    return AST

  }

  static async getSourceFromContent(content, option = { 'path': '(anonymous)' }) {
    // console.log('Transform.getSourceFromContent(content, option) { ... }')

    let AST = this.getASTFromContent(content, option)
    let blockNode = new BlockNode(AST, option)
    let blockSource = await blockNode.getSource()

    // if (TagNode.__createNode.isCalled) {
    //   source = `  ${source}
    //               function ${TagNode.__getNodeName.toString().replace(pattern, '')}
    //               function ${TagNode.__getNodeProperty.toString().replace(pattern, '')}
    //               function ${TagNode.__getChildNode.toString().replace(pattern, '')}
    //               function ${TagNode.__createNode.toString().replace(pattern, '')}`
    // }

    // if (AttributeNode.__addAttribute.isCalled) {
    //   source = `  ${source}
    //               function ${AttributeNode.__getAttributeName.toString().replace(pattern, '')}
    //               function ${AttributeNode.__getAttributeValue.toString().replace(pattern, '')}
    //               function ${AttributeNode.__addAttribute.toString().replace(pattern, '')}`
    // }

    // if (EachNode.__forEach.isCalled) {
    //   source = `  ${source}
    //               function ${EachNode.__forEach.toString().replace(pattern, '')}`
    // }

    // if (AndAttributeNode.__addAndAttribute.isCalled) {
    //   source = `  ${source}
    //               function ${AndAttributeNode.__addAndAttribute.toString().replace(pattern, '')}`
    // }

    let source = null
    source = `  function __getNode(__option = {}) { 
                  const __node = []
                  ${blockSource}
                  return __node
                }`

    let local = null
    let countOfLocal = null
    let pattern = /eslint-disable-line no-undef/gi

    do {

      local = await this._getLocalFromSource(source)
      countOfLocal = local.length

      if (local.includes('__createNode')) {

        source = `  function ${TagNode.__getNodeName.toString().replace(pattern, '')}
                    function ${TagNode.__getNodeProperty.toString().replace(pattern, '')}
                    function ${TagNode.__getChildNode.toString().replace(pattern, '')}
                    function ${TagNode.__createNode.toString().replace(pattern, '')}
                    ${source}`
  
        local = local
          .filter((local) => local !== '__createNode')
  
      }
  
      if (local.includes('__addAttribute')) {
  
        source = `  function ${AttributeNode.__getAttributeName.toString().replace(pattern, '')}
                    function ${AttributeNode.__getAttributeValue.toString().replace(pattern, '')}
                    function ${AttributeNode.__addAttribute.toString().replace(pattern, '')}
                    ${source}`
  
        local = local
          .filter((local) => local !== '__addAttribute')
  
      }
  
      if (local.includes('__forEach')) {
  
        source = `  function ${EachNode.__forEach.toString().replace(pattern, '')}
                    ${source}`
  
        local = local
          .filter((local) => local !== '__forEach')
  
      }
  
      if (local.includes('__addAndAttribute')) {
  
        source = `  function ${AndAttributeNode.__addAndAttribute.toString().replace(pattern, '')}
                    ${source}`
  
        local = local
          .filter((local) => local !== '__addAndAttribute')
  
      }
  
    } while (local.length < countOfLocal)

    return { source, local }

  }

  static async getFunctionSourceFromContent(content, option = { 'path': '(anonymous)' }) {
    // console.log('Transform.getFunctionSourceFromContent(content, option) { ... }')

    let { source, local } = await this.getSourceFromContent(content, option)

    local = local
      .map((local) => `const { ${local} } = __local`)
      .join('\n')

    source =  ` function __getNode(__local = {}, __option = {}) {
                  ${local}
                  ${source} 
                  return __getNode(__option) 
                }`

    return source

  }

  static async getFunctionFromContent(content, option = { 'path': '(anonymous)' }) {
    // console.log('Transform.getFunctionFromContent(content, option) { ... }')

    let source = null
    source = await this.getFunctionSourceFromContent(content, option)
    source = await this.formatSource(source)

    let fn = null
    eval(`fn = ${source}`)

    return fn

  }

  static async getModuleSourceFromContent(content, option = { 'path': '(anonymous)' }) {
    // console.log('Transform.getModuleSourceFromContent(content, option) { ... }')

    let source = null
    source = await this.getFunctionSourceFromContent(content, option)
    source =  ` // Powered by ${Package.name} v${Package.version}
                // FilePath = '${Path.relative('', FilePath)}'
                import CreateVirtualNode from 'virtual-dom/h.js'
                import _ConvertToVirtualNode from 'html-to-vdom'
                import VirtualNode from 'virtual-dom/vnode/vnode.js'
                import VirtualText from 'virtual-dom/vnode/vtext.js'
                const ConvertToVirtualNode = _ConvertToVirtualNode({ 'VNode': VirtualNode, 'VText': VirtualText })
                ${source}
                export default function(__local = {}, __option = { 'createNode': CreateVirtualNode, 'convertToNode': ConvertToVirtualNode }) { 
                  return __getNode(__local, __option) 
                }`

    return source

  }

  static async getASTFromPath(path) {
    // console.log(`Transform.getASTFromPath('${Path.relative('', path)}') { ... }`)

    let content = await FileSystem.readFile(path, { 'encoding': 'utf-8' })
    let AST = this.getASTFromContent(content, { 'path': path })

    return AST

  }

  static async getSourceFromPath(path) {
    // console.log(`Transform.getSourceFromPath('${Path.relative('', path)}') { ... }`)

    let content = await FileSystem.readFile(path, { 'encoding': 'utf-8' })
    let source = await this.getSourceFromContent(content, { 'path': path })

    return source

  }

  static async getFunctionSourceFromPath(path) {
    // console.log('Transform.getFunctionSourceFromPath('${Path.relative('', path)}') { ... }`)

    let content = await FileSystem.readFile(path, { 'encoding': 'utf-8' })
    let source = await this.getFunctionSourceFromContent(content, { 'path': path })

    return source

  }

  static async getFunctionFromPath(path) {
    // console.log(`Transform.getFunctionFromPath('${Path.relative('', path)}') { ... }`)

    let content = await FileSystem.readFile(path, { 'encoding': 'utf-8' })
    let fn = await this.getFunctionFromContent(content, { 'path': path })

    return fn

  }

  static async getModuleSourceFromPath(path) {
    // console.log('Transform.getModuleSourceFromPath('${Path.relative('', path)}') { ... }`)

    let content = await FileSystem.readFile(path, { 'encoding': 'utf-8' })
    let source = await this.getModuleSourceFromContent(content, { 'path': path })

    return source

  }

  static async createModuleFromPath(sourcePath, targetPath = FileSystem.statSync(sourcePath).isDirectory() ? sourcePath : `${Path.dirname(sourcePath)}/${Path.basename(sourcePath, Path.extname(sourcePath))}${Path.extname(FilePath)}`, option = { 'encoding': 'utf-8', 'flag': 'wx' }) {
    // console.log(`Transform.createModuleFromPath('${Path.relative('', sourcePath)}', '${Path.relative('', targetPath)}', option) { ... }`)

    let sourceInformation = await FileSystem.stat(sourcePath)

    if (sourceInformation.isDirectory()) {
  
      let includePattern = [ '*.pug' ]
      let excludePattern = [ '*.skip.pug' ]

      let item = await FileSystem.readdir(sourcePath, { 'encoding': 'utf-8', 'withFileTypes': true })
  
      let createModule = []
  
      createModule = createModule.concat(item
        .filter((item) => item.isDirectory())
        .map((folder) => this.createModuleFromPath(`${sourcePath}/${folder.name}`, `${targetPath}/${folder.name}`, option)))
  
      createModule = createModule.concat(item
        .filter((item) => item.isFile())
        .filter((file) => includePattern.reduce((isMatch, pattern) => isMatch ? isMatch : Match(file.name, pattern), false))
        .filter((file) => !excludePattern.reduce((isMatch, pattern) => isMatch ? isMatch : Match(file.name, pattern), false))
        .map((file) => this.createModuleFromPath(`${sourcePath}/${file.name}`, `${targetPath}/${Path.basename(file.name, Path.extname(file.name))}${Path.extname(FilePath)}`), option))
    
      return Promise.all(createModule)
        
    } else {

      let isCreated = false

      if (await FileSystem.pathExists(targetPath)) {

        let targetInformation = await FileSystem.stat(targetPath)

        if (sourceInformation.mtime > targetInformation.mtime) {
          isCreated = true
        }

      } else {
        isCreated = true
      }

      if (isCreated) {

        let source = null
        source = await this.getModuleSourceFromPath(sourcePath)
        source = await this.formatSource(source, Path.extname(targetPath).toUpperCase() === '.CJS' ? 'commonjs' : 'esmodule')

        await FileSystem.ensureDir(Path.dirname(targetPath))
        // console.log(`await FileSystem.writeFile('${Path.relative('', targetPath)}', source, option)`)
        return FileSystem.writeFile(targetPath, source, option)
    
      }

    }

  }

  static async formatSource(source, environment = Path.extname(FilePath).toUpperCase() === '.CJS' ? 'commonjs' : 'esmodule') {

    let configuration = null
    configuration = JSON5.parse(await FileSystem.readFile(Require.resolve('./transform.babelrc.json')), { 'encoding': 'utf-8' })
    configuration = configuration.env[environment]
    
    let { code: sourceOut } = await Babel.transformAsync(source, configuration)

    sourceOut = Format(sourceOut, {
      'arrowParens': 'always',
      'bracketSpacing': true,
      'parser': 'babel',
      'quoteProps': 'consistent',
      'semi': false,
      'singleQuote': true,
      'tabWidth': 2,
      'trailingComma': 'none'
    })

    return sourceOut

  }

  static async _getLocalFromSource(source) {

    let configuration = JSON5.parse(await FileSystem.readFile(Require.resolve('./transform.eslintrc.json')), { 'encoding': 'utf-8' })
    let lint = new Lint({ 'baseConfig': configuration })

    let result = await lint.lintText(source)
    let pattern = /^'(.*)' is not defined.$/i

    let local = null
    local = result[0].messages
      .filter((message) => message.ruleId === 'no-undef')
      .map((message) => message.message)
      .map((message) => {

        let match = null

        if (Is.not.null(match = pattern.exec(message))) {
          let [ , local ] = match
          return local
        } else {
          throw new UnrecognizedMessageTransformError(message)
        }

      })
      .reduce((accumulator, local) => {
        accumulator[local] = undefined
        return accumulator
      }, {})

    local = Object.keys(local)

    return local

  }

}

export { Transform }