FROM ghcr.io/synthetixio/docker-node/alpine:12.20

RUN npm install -g audit-ci@3.1.1 lockfile-lint@4.3.7

RUN curl -LO https://storage.googleapis.com/container-diff/v0.15.0/container-diff-linux-amd64 && chmod +x container-diff-linux-amd64 && mv container-diff-linux-amd64 "$HOME"/bin/container-diff
