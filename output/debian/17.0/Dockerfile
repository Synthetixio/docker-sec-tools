
FROM ghcr.io/synthetixio/docker-node/debian:17.0
RUN python3 -m pip install slither-analyzer==0.8.1

RUN npm install -g lockfile-lint@4.6.2 audit-ci@5.1.2 auditjs@4.0.33

RUN curl -LO https://storage.googleapis.com/container-diff/v0.17.0/container-diff-linux-amd64 \
    && chmod +x container-diff-linux-amd64 \
    && mv container-diff-linux-amd64 /usr/local/bin/container-diff

RUN curl https://keybase.io/codecovsecurity/pgp_keys.asc | gpg --no-default-keyring --keyring trustedkeys.gpg --import \
    && curl -Os https://uploader.codecov.io/v0.1.9/linux/codecov \
    && curl -Os https://uploader.codecov.io/v0.1.9/linux/codecov.SHA256SUM \
    && curl -Os https://uploader.codecov.io/v0.1.9/linux/codecov.SHA256SUM.sig \
    && gpgv codecov.SHA256SUM.sig codecov.SHA256SUM \
    && shasum -a 256 -c codecov.SHA256SUM \
    && chmod +x codecov \
    && mv codecov /usr/local/bin/codecov
