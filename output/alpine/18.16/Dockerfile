
FROM ghcr.io/synthetixio/docker-node/alpine:18.16

RUN npm install -g lockfile-lint@4.10.1 audit-ci@6.6.1 auditjs@4.0.39

RUN curl -LO https://storage.googleapis.com/container-diff/v0.17.0/container-diff-linux-amd64 \
    && chmod +x container-diff-linux-amd64 \
    && mv container-diff-linux-amd64 /usr/local/bin/container-diff

RUN curl https://keybase.io/codecovsecurity/pgp_keys.asc | gpg --no-default-keyring --keyring trustedkeys.gpg --import \
    && curl -Os https://uploader.codecov.io/v0.5.0/alpine/codecov \
    && curl -Os https://uploader.codecov.io/v0.5.0/alpine/codecov.SHA256SUM \
    && curl -Os https://uploader.codecov.io/v0.5.0/alpine/codecov.SHA256SUM.sig \
    && gpgv codecov.SHA256SUM.sig codecov.SHA256SUM \
    && sha256sum -c codecov.SHA256SUM \
    && chmod +x codecov \
    && mv codecov /usr/local/bin/codecov
