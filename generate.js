const fs = require('fs');
const dft = require('dockerfile-template');
const dockerfileTemplate = fs.readFileSync('./Dockerfile.template', 'utf8');
const args = require('minimist')(process.argv.slice(2))._;
const nodeVersions = typeof args[0] === 'string' ? args[0].split(',') : args;

for (const nodeVersion of nodeVersions) {
	const versions = {
		TAG: nodeVersion,
		AUDIT_CI_VERSION: '3.1.1',
		LOCKFILE_LINT_VERSION: '4.3.7',
		CONTAINER_DIFF_VERSION: '0.15.0',
	};

	const updatedDockerfile = dft.process(dockerfileTemplate, versions);
	const dockerfilePath = `./${nodeVersion}`;

	if (!fs.existsSync(dockerfilePath)) {
		fs.mkdirSync(dockerfilePath);
		fs.writeFileSync(`${dockerfilePath}/Dockerfile`, updatedDockerfile);
	} else {
		fs.writeFileSync(`${dockerfilePath}/Dockerfile`, updatedDockerfile);
	}

	console.log(`Dockerfile for node:${nodeVersion} generated with success.`);
}
