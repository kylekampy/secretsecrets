#!/bin/bash

cat <<EOF > $CONSUL_CONFIG_LOCATION
{
  "advertise_addr": "$CONSUL_ADVERTISE_ADDR",
  "advertise_addr_wan": "$CONSUL_ADVERTISE_ADDR_WAN",
  "bootstrap": $CONSUL_BOOTSTRAP_FLAG,
  "datacenter": "$CONSUL_DATACENTER",
  "enable_syslog": true,
  "data_dir": "/var/consul/data",
  "log_level": "INFO",
  "node_name": "$CONSUL_NODE_NAME",
  "retry_join": $CONSUL_RETRY_JOIN_ARRAY,
  "server": true,
  "ui": true
}
EOF