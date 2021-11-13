#!/usr/bin/env bash

echo ":: Cleaning project directory..."
ls ./src | xargs rm -rf >> /dev/null
echo ":: Done"