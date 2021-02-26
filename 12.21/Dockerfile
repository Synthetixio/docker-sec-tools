FROM ghcr.io/synthetixio/docker-node/alpine:12.21

RUN npm install -g audit-ci@3.1.1 lockfile-lint@4.6.2

RUN curl -LO https://storage.googleapis.com/container-diff/v0.16.0/container-diff-linux-amd64 && chmod +x container-diff-linux-amd64 && mv container-diff-linux-amd64 "$HOME"/bin/container-diff
