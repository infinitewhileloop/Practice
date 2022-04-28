#!/usr/bin/env bash

# https://ryanstutorials.net/bash-scripting-tutorial/bash-arithmetic.php

let "a = $1 * $2"
echo "$a"

expr $1 \* $2

echo $(( $1 * $2))
