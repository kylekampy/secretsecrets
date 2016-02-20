#!/usr/bin/env bash

set -e

# Get what's needed for add-apt-repository
apt-get install -y python-software-properties

add-apt-repository -y ppa:git-core/ppa
add-apt-repository -y ppa:ansible/ansible

apt-get update

# ALWAYS COWSAY! ALWAYS!
apt-get install -y cowsay git ansible curl jq

# Docker
curl -sSL https://get.docker.com/ | sh
adduser vagrant docker
curl -L https://github.com/docker/compose/releases/download/1.6.0/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
chmod 755 /usr/local/bin/docker-compose


# Install latest nodejs/npm
curl -sL https://deb.nodesource.com/setup | sudo bash -
apt-get install -y nodejs
npm -g install npm@latest
npm install -g gulp