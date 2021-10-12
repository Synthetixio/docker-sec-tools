
FROM ghcr.io/synthetixio/docker-node/alpine:16.11

RUN npm install -g lockfile-lint@4.6.2 audit-ci@5.1.1 auditjs@4.0.32

RUN curl -LO https://storage.googleapis.com/container-diff/v0.17.0/container-diff-linux-amd64 \
    && chmod +x container-diff-linux-amd64 \
    && mv container-diff-linux-amd64 /usr/local/bin/container-diff

RUN curl https://keybase.io/codecovsecurity/pgp_keys.asc | gpg --no-default-keyring --keyring trustedkeys.gpg --import \
    && curl -Os https://uploader.codecov.io/v0.1.5/alpine/codecov \
    && curl -Os https://uploader.codecov.io/v0.1.5/alpine/codecov.SHA256SUM \
    && curl -Os https://uploader.codecov.io/v0.1.5/alpine/codecov.SHA256SUM.sig \
    && gpgv codecov.SHA256SUM.sig codecov.SHA256SUM \
    && sha256sum -c codecov.SHA256SUM \
    && chmod +x codecov \
    && mv codecov /usr/local/bin/codecov
