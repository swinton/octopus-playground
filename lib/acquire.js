const os = require('os');

const core = require('@actions/core');
const tc = require('@actions/tool-cache');

function downloadURLForPlatform(version) {
  const platformURLs = new Map();
  platformURLs.set(`win32`, `https://download.octopusdeploy.com/octopus-tools/${ version }/OctopusTools.${ version }.win-x64.zip`);
  platformURLs.set(`darwin`, `https://download.octopusdeploy.com/octopus-tools/${ version }/OctopusTools.${ version }.osx-x64.tar.gz`);
  platformURLs.set(`linux`, `https://download.octopusdeploy.com/octopus-tools/${ version }/OctopusTools.${ version }.linux-x64.tar.gz`);
  return platformURLs.get(os.platform());
}

async function acquire(version) {
  const downloadURL = downloadURLForPlatform(version);
  core.debug(`Acquiring ${version} for ${os.platform()} via ${downloadURL}.`);

  const downloadPath = await tc.downloadTool(downloadURL);

  let extractDir;
  if (downloadURL.endsWith('.zip')) {
    extractDir = await tc.extractZip(downloadPath);
  } else {
    extractDir = await tc.extractTar(downloadPath);
  }

  core.debug(`Version ${version} extracted to ${extractDir}.`);
}

module.exports = acquire;
