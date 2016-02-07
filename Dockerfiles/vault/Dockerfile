FROM alpine:3.3
MAINTAINER SSquared

RUN apk add --update unzip

RUN mkdir -p /var/vault/data
ADD https://releases.hashicorp.com/vault/0.4.1/vault_0.4.1_linux_amd64.zip /tmp/vault.zip
RUN unzip /tmp/vault.zip -d /var/vault

COPY ./vault-entrypoint.sh /var/vault/vault-entrypoint.sh
RUN chmod 755 /var/vault/vault-entrypoint.sh

ENTRYPOINT ["/var/vault/vault-entrypoint.sh"]

CMD ["/var/vault/vault", "server", "-config=/var/vault/vault.json"]
