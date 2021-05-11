FROM ghcr.io/synthetixio/docker-node/alpine:10.24

RUN npm install -g lockfile-lint@4.6.2 audit-ci@4.0.0

RUN curl -LO https://storage.googleapis.com/container-diff/v0.16.0/container-diff-linux-amd64 && chmod +x container-diff-linux-amd64 && mv container-diff-linux-amd64 "$HOME"/bin/container-diff
