# docker-sec-tools

## Description

Docker container based on [docker-node](https://github.com/Synthetixio/docker-node) with following security tools included:

* [audit-ci](https://www.npmjs.com/package/audit-ci)
* [lockfile-lint](https://www.npmjs.com/package/lockfile-lint)
* [container-diff](https://github.com/GoogleContainerTools/container-diff)

## Updating versions

Take a look at [config.json](https://github.com/Synthetixio/docker-node/blob/master/config.json) file.

## Generating dockerfiles

Is as simple as running:

1. `cd shared`
2. `npm install`
3. `npm run generate`

