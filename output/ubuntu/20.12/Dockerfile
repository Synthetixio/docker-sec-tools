
FROM ghcr.io/synthetixio/docker-node/ubuntu:20.12
RUN python3 -m pip install slither-analyzer==0.10.0

RUN npm install -g lockfile-lint@4.12.1 audit-ci@6.6.1

RUN curl -LO https://storage.googleapis.com/container-diff/v0.17.0/container-diff-linux-amd64 \
    && chmod +x container-diff-linux-amd64 \
    && mv container-diff-linux-amd64 /usr/local/bin/container-diff

RUN curl https://keybase.io/codecovsecurity/pgp_keys.asc | gpg --no-default-keyring --keyring trustedkeys.gpg --import \
    && curl -Os https://uploader.codecov.io/v0.7.1/linux/codecov \
    && curl -Os https://uploader.codecov.io/v0.7.1/linux/codecov.SHA256SUM \
    && curl -Os https://uploader.codecov.io/v0.7.1/linux/codecov.SHA256SUM.sig \
    && gpgv codecov.SHA256SUM.sig codecov.SHA256SUM \
    && shasum -a 256 -c codecov.SHA256SUM \
    && chmod +x codecov \
    && mv codecov /usr/local/bin/codecov
