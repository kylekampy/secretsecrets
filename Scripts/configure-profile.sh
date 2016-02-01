#!/usr/bin/env bash

set -e

mkdir -p /etc/profile.d

echo "" > /etc/profile.d/environment.sh
echo "cd /vagrant" >> /etc/profile.d/environment.sh
