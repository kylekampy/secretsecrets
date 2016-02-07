#!/bin/sh -e
cat > /var/vault/vault.json <<-EOF
{
  "listener": {
    "tcp": {
      "address": "${VAULT_LISTENER_ADDR}",
      "tls_disable": ${VAULT_TLS_DISABLE}
    }
  },
  "backend": {
    "consul": {
      "address": "${VAULT_BACKEND_CONSUL_ADDR}"
    }
  },
  "telemetry": {
  },
  "max_lease_ttl": "${VAULT_MAX_LEASE_TTL}",
  "default_lease_ttl": "${VAULT_DEFAULT_LEASE_TTL}",

  "disable_mlock": ${VAULT_DISABLE_MLOCK}
}
EOF

exec "$@"
