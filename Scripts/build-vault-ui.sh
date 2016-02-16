#!/usr/bin/env bash

set -e

pushd /vagrant/vault-ui

npm install
gulp build

popd


