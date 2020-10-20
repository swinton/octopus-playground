const core = require('@actions/core');

(async () => {
  const version = core.getInput('version');

  console.log(`version: ${version}`);
})();
