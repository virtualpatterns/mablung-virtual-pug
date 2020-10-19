// import ChangeCase from 'change-case' // correct for esm
// import * as ChangeCase from 'change-case' // correct for cjs
import ChangeCase0, * as ChangeCase1 from 'change-case'
import DefaultBabel, * as ModuleBabel from '@babel/core'

console.dir(ChangeCase0)
console.dir(ChangeCase1)

const Babel = DefaultBabel || ModuleBabel
const { 'paramCase': ParameterCase } = ChangeCase0 || ChangeCase1

console.log(`ParameterCase('AWalkInThePark') = ${ParameterCase('AWalkInThePark')}`)

debugger

// for cjs ...
//    0 is undefined
//    1 is object includes paramCase

// for esm ... 
//    0 is object includes paramCase
//    1 is object includes default includes paramCase
