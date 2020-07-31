import { createRequire as _createRequire } from "module";import _URL from "url";import Path from 'path';
import _Test from 'ava';

import { Scenario } from './scenario.js';

const FilePath = _URL.fileURLToPath(import.meta.url);
const FolderPath = Path.dirname(FilePath);
const Require = _createRequire(import.meta.url);

async function main() {

  (await Scenario.createScenarioFromFolder(`${FolderPath}/resource/scenario`)).forEach(scenario => {

    let Test = scenario.modifier.reduce((__Test, modifier) => __Test[modifier], _Test);

    Test(`getHTML() using '${Path.relative(`${FolderPath}/resource/scenario`, scenario.path)}'`, async test => {

      let { virtualHTML, realHTML } = await scenario.getHTML();

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

  [
  Require.resolve('./resource/scenario/text/01-literal-html.skip.pug')].
  forEach(path => {

    _Test(`getHTML() using '${Path.relative(`${FolderPath}/resource/scenario`, path)}' throws TypeError`, async test => {
      let scenario = await Scenario.createScenarioFromFile(path);
      await test.throwsAsync(scenario.getHTML(), { 'instanceOf': TypeError });
    });

  });

  [
  Require.resolve('./resource/scenario/attribute/03-multiline-attribute.skip.pug'),
  Require.resolve('./resource/scenario/comment/04-conditional-comment.skip.pug'),
  Require.resolve('./resource/scenario/filter/02-nested-filter.skip.pug'),
  Require.resolve('./resource/scenario/include/02-filtered-text.skip.pug')].
  forEach(path => {

    _Test(`getHTML() using '${Path.relative(`${FolderPath}/resource/scenario`, path)}' does not match Pug`, async test => {

      let scenario = await Scenario.createScenarioFromFile(path);
      let { virtualHTML, realHTML } = await scenario.getHTML();

      test.not(virtualHTML, realHTML);

    });

  });

}

main();
//# sourceMappingURL=scenario.test.js.map