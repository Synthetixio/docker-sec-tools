
FROM ghcr.io/synthetixio/docker-node/ubuntu:12.22

RUN npm install -g lockfile-lint@4.6.2 audit-ci@4.1.0 auditjs@4.0.29

RUN curl -LO https://storage.googleapis.com/container-diff/v0.17.0/container-diff-linux-amd64 && chmod +x container-diff-linux-amd64 && mv container-diff-linux-amd64 /usr/local/bin/container-diff
