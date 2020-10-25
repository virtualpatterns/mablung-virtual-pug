import DefaultParser, * as ModuleParser from '@babel/parser'
import DefaultTraverse, * as ModuleTraverse from '@babel/traverse'

const { 'parse': Parse } = DefaultParser || ModuleParser
const Traverse = DefaultTraverse.default || ModuleTraverse.default

debugger