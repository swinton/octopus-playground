const core = require('@actions/core');

const acquire = require('./lib/acquire');

/*
https://download.octopusdeploy.com/octopus-tools/7.4.2/OctopusTools.7.4.2.win-x64.zip
https://download.octopusdeploy.com/octopus-tools/7.4.2/OctopusTools.7.4.2.osx-x64.tar.gz
https://download.octopusdeploy.com/octopus-tools/7.4.2/OctopusTools.7.4.2.linux-x64.tar.gz
*/

(async () => {
  const version = core.getInput('version');

  try {
    await acquire(version);
  } catch (e) {
    core.setFailed(e);
  }
})();
