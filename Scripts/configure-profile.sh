#!/usr/bin/env bash

set -e

mkdir -p /etc/profile.d

echo "" > /etc/profile.d/environment.sh
echo "export PATH=/vagrant/bin:$PATH" >> /etc/profile.d/environment.sh
echo "cd /vagrant" >> /etc/profile.d/environment.sh
