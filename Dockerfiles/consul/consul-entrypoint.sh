#!/bin/sh -e
cat > /var/consul/consul.json <<-EOF
{
  "client_addr": "0.0.0.0",
  "advertise_addr_wan": "${CONSUL_ADVERTISE_ADDR_WAN}",
  "bootstrap": ${CONSUL_BOOTSTRAP_FLAG},
  "datacenter": "${CONSUL_DATACENTER}",
  "data_dir": "/var/consul/data",
  "log_level": "INFO",
  "node_name": "${CONSUL_NODE_NAME}",
  "retry_join": ${CONSUL_RETRY_JOIN_ARRAY},
  "server": true,
  "ui": true
}
EOF

exec "$@"
