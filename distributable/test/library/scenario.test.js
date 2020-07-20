"use strict";

var _path = _interopRequireDefault(require("path"));

var _ava = _interopRequireDefault(require("ava"));

var _scenario = require("./scenario.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function main() {
  (await _scenario.Scenario.createScenarioFromFolder(`${__dirname}/resource/scenario`)).forEach(scenario => {
    let Test = scenario.modifier.reduce((__Test, modifier) => __Test[modifier], _ava.default);
    Test(`getHTML() using '${_path.default.relative(`${__dirname}/resource/scenario`, scenario.path)}'`, async test => {
      let {
        virtualHTML,
        realHTML
      } = await scenario.getHTML();

      if (virtualHTML !== realHTML) {
        test.log('-'.repeat(80));
        test.log('realHTML');
        test.log('-'.repeat(80));
        test.log(realHTML);
        test.log('-'.repeat(80));
        test.log('virtualHTML');
        test.log('-'.repeat(80));
        test.log(virtualHTML);
        test.log('-'.repeat(80));
      }

      test.is(virtualHTML, realHTML);
    });
  });
  [require.resolve('./resource/scenario/text/01-literal-html.skip.pug')].forEach(path => {
    (0, _ava.default)(`getHTML() using '${_path.default.relative(`${__dirname}/resource/scenario`, path)}' throws TypeError`, async test => {
      let scenario = await _scenario.Scenario.createScenarioFromFile(path);
      await test.throwsAsync(scenario.getHTML(), {
        'instanceOf': TypeError
      });
    });
  });
  [require.resolve('./resource/scenario/attribute/03-multiline-attribute.skip.pug'), require.resolve('./resource/scenario/comment/04-conditional-comment.skip.pug'), require.resolve('./resource/scenario/filter/02-nested-filter.skip.pug'), require.resolve('./resource/scenario/include/02-filtered-text.skip.pug')].forEach(path => {
    (0, _ava.default)(`getHTML() using '${_path.default.relative(`${__dirname}/resource/scenario`, path)}' does not match Pug`, async test => {
      let scenario = await _scenario.Scenario.createScenarioFromFile(path);
      let {
        virtualHTML,
        realHTML
      } = await scenario.getHTML();
      test.not(virtualHTML, realHTML);
    });
  });
}

main();
//# sourceMappingURL=scenario.test.js.map