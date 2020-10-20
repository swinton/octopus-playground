const os = require('os');

const core = require('@actions/core');

async function acquire(version) {
  core.debug(`Acquiring ${version} for ${os.platform()}.`);
}

module.exports = acquire;
