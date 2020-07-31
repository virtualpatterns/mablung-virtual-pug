import DefaultBabel, * as ModuleBabel from '@babel/core'
import ESLint from 'eslint'
import FileSystem from 'fs-extra'
import _Format from 'prettier'
import Is from '@pwn/is'
import JSON5 from 'json5'
import Lex from 'pug-lexer'
import Link from 'pug-linker'
import Load from 'pug-load'
import Parse from 'pug-parser'
import Path from 'path'

import AndAttributeNode from './node/and-attribute-node.js'
import AttributeNode from './node/attribute-node.js'
import BlockNode from './node/block-node.js'
import EachNode from './node/each-node.js'
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

    let source =  ` function ${EachNode.__forEach.toString()}
                    function ${AndAttributeNode.__addAndAttribute.toString()}
                    function ${AttributeNode.__getAttributeValue.toString()}
                    function ${AttributeNode.__addAttribute.toString()}
                    function __getNode(__option = {}) { 
                      // Powered by ${Package.name} v${Package.version}
                      // FilePath = '${Path.relative('', FilePath)}'
                      const __node = []
                      ${blockSource}
                      return __node
                    }`

    let local = await this._getLocalFromSource(source)

    return { source, local }

  }

  static async getFunctionSourceFromContent(content, option = { 'path': '(anonymous)' }) {
    // console.log('Transform.getFunctionSourceFromContent(content, option) { ... }')

    let { source, local } = await this.getSourceFromContent(content, option)

    local = local
      .map((local) => `const { ${local} } = __local`)
      .join('\n')

    source =  ` function __getNode(__local = {}, __option = {}) {
                  // Powered by ${Package.name} v${Package.version}
                  // FilePath = '${Path.relative('', FilePath)}'
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

  static async createModuleFromPath(path, option = { 'encoding': 'utf-8', 'flag': 'wx' }) {
    // console.log(`Transform.createModuleFromPath('${Path.relative('', path)}') { ... }`)

    let source = null
    source = await this.getFunctionSourceFromPath(path)
    source =  ` import CreateVirtualNode from 'virtual-dom/h.js'
                import _ConvertToVirtualNode from 'html-to-vdom'
                import VirtualNode from 'virtual-dom/vnode/vnode.js'
                import VirtualText from 'virtual-dom/vnode/vtext.js'
                const ConvertToVirtualNode = _ConvertToVirtualNode({ 'VNode': VirtualNode, 'VText': VirtualText })
                ${source}
                export default function(__local = {}, __option = { 'createNode': CreateVirtualNode, 'convertToNode': ConvertToVirtualNode }) { 
                  // Powered by ${Package.name} v${Package.version}
                  // FilePath = '${Path.relative('', FilePath)}'
                  return __getNode(__local, __option) 
                }`

    source = await this.formatSource(source)

    let extension = Path.extname(FilePath)
    let modulePath = `${path}${extension}`

    await FileSystem.writeFile(modulePath, source, option)

    return import(modulePath)

  }

  static async formatSource(source) {

    let extension = null
    extension = Path.extname(FilePath)
    extension = extension.toLowerCase()

    let configuration = null
    configuration = JSON5.parse(await FileSystem.readFile(Require.resolve('./transform.babelrc.json')), { 'encoding': 'utf-8' })
    configuration = configuration.env[extension === '.cjs' ? 'cjs' : 'esm']
    
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