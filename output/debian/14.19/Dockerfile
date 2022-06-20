
FROM ghcr.io/synthetixio/docker-node/debian:14.19
RUN python3 -m pip install slither-analyzer==0.8.3

RUN npm install -g lockfile-lint@4.7.5 audit-ci@6.3.0 auditjs@4.0.37

RUN curl -LO https://storage.googleapis.com/container-diff/v0.17.0/container-diff-linux-amd64 \
    && chmod +x container-diff-linux-amd64 \
    && mv container-diff-linux-amd64 /usr/local/bin/container-diff

RUN curl https://keybase.io/codecovsecurity/pgp_keys.asc | gpg --no-default-keyring --keyring trustedkeys.gpg --import \
    && curl -Os https://uploader.codecov.io/v0.2.4/linux/codecov \
    && curl -Os https://uploader.codecov.io/v0.2.4/linux/codecov.SHA256SUM \
    && curl -Os https://uploader.codecov.io/v0.2.4/linux/codecov.SHA256SUM.sig \
    && gpgv codecov.SHA256SUM.sig codecov.SHA256SUM \
    && shasum -a 256 -c codecov.SHA256SUM \
    && chmod +x codecov \
    && mv codecov /usr/local/bin/codecov
