#!/bin/bash

# A script that shows lines containing trailing white spaces from a file

file=$1

if [[ ! -f "$file" ]]; then
    echo "Error: not a file"
    exit 1
fi

echo "In the file '$file', the following lines contain trailing white spaces:"

sed -n '/ $/p' "$file"
