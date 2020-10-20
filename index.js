const core = require('@actions/core');

const acquire = require('./lib/acquire');

(async () => {
  const version = core.getInput('version');

  try {
    await acquire(version);
  } catch (e) {
    core.setFailed(e);
  }
})();
