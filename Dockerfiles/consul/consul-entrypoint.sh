#!/bin/bash -e
j2 /var/consul/consul.json.j2 > /var/consul/consul.json
exec "$@"
