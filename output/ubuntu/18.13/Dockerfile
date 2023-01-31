
FROM ghcr.io/synthetixio/docker-node/ubuntu:18.13
RUN python3 -m pip install slither-analyzer==0.9.2

RUN npm install -g lockfile-lint@4.10.0 audit-ci@6.6.1 auditjs@4.0.39

RUN curl -LO https://storage.googleapis.com/container-diff/v0.17.0/container-diff-linux-amd64 \
    && chmod +x container-diff-linux-amd64 \
    && mv container-diff-linux-amd64 /usr/local/bin/container-diff

RUN curl https://keybase.io/codecovsecurity/pgp_keys.asc | gpg --no-default-keyring --keyring trustedkeys.gpg --import \
    && curl -Os https://uploader.codecov.io/v0.3.2/linux/codecov \
    && curl -Os https://uploader.codecov.io/v0.3.2/linux/codecov.SHA256SUM \
    && curl -Os https://uploader.codecov.io/v0.3.2/linux/codecov.SHA256SUM.sig \
    && gpgv codecov.SHA256SUM.sig codecov.SHA256SUM \
    && shasum -a 256 -c codecov.SHA256SUM \
    && chmod +x codecov \
    && mv codecov /usr/local/bin/codecov
