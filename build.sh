#!/bin/bash
# so it turns out this isn't really needed, because there is an almost duplicate script already written in /scripts
# I'm just going to commit this to attempt to get jenkins to pick up the push.
pushd vault-ui
npm install
gulp
popd
