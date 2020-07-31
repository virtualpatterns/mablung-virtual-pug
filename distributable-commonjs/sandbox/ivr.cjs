"use strict";

var ChangeCase1 = _interopRequireWildcard(require("change-case"));

var ModuleBabel = _interopRequireWildcard(require("@babel/core"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import ChangeCase from 'change-case' // correct for esm
// import * as ChangeCase from 'change-case' // correct for cjs
console.dir(ChangeCase1.default);
console.dir(ChangeCase1);
const Babel = ModuleBabel.default || ModuleBabel;
const {
  paramCase: ParameterCase
} = ChangeCase1.default || ChangeCase1;
console.log(`ParameterCase('AWalkInThePark') = ${ParameterCase('AWalkInThePark')}`);
debugger; // for cjs ...
//    0 is undefined
//    1 is object includes paramCase
// for esm ... 
//    0 is object includes paramCase
//    1 is object includes default includes paramCase
//# sourceMappingURL=ivr.cjs.map