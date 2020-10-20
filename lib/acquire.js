const core = require('@actions/core');

async function acquire(version) {
  core.debug(`Acquiring ${version}.`);
}

module.exports = acquire;
