#!/bin/sh
set -eu
SCRIPT_DIR=$(cd $(dirname $0) && pwd)
cd $SCRIPT_DIR

function move() {
    cd ..
    return 0
}

function npmInstall() {
    move
    npm install
    cd $SCRIPT_DIR
    return 0
}

npmInstall
echo 'setup complete'