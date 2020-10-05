# docker-sec-tools

## Description

Docker container based on [cimg-node](https://github.com/CircleCI-Public/cimg-node) with following security tools included:

* [audit-ci](https://www.npmjs.com/package/audit-ci)
* [lockfile-lint](https://www.npmjs.com/package/lockfile-lint)
* [container-diff](https://github.com/GoogleContainerTools/container-diff)

## Generating dockerfiles

Is as simple as running:

`npm run generate <node_version>`:

* single dockerfile: `npm run generate 12.18`
* multiple dockerfiles: `npm run generate 10.22,12.18,14.13`
