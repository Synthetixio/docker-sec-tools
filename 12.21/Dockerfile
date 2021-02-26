FROM ghcr.io/synthetixio/docker-node/alpine:12.21

RUN npm install -g lockfile-lint@4.6.2 npm-audit-ci-wrapper@3.0.1 auditjs@4.0.24

RUN curl -LO https://storage.googleapis.com/container-diff/v0.16.0/container-diff-linux-amd64 && chmod +x container-diff-linux-amd64 && mv container-diff-linux-amd64 "$HOME"/bin/container-diff
