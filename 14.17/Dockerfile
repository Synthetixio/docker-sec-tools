FROM ghcr.io/synthetixio/docker-node/alpine:14.17

RUN npm install -g lockfile-lint@4.6.2 audit-ci@4.0.0

RUN curl -LO https://storage.googleapis.com/container-diff/v0.16.0/container-diff-linux-amd64 && chmod +x container-diff-linux-amd64 && mv container-diff-linux-amd64 /usr/local/bin/container-diff
