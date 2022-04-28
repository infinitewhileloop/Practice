#!/usr/bin/env bash

min="$1"
max="$2"
random=$RANDOM
echo $(( random % (max - min) + min ))
