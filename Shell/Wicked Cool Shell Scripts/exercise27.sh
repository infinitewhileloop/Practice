#!/usr/bin/env bash

# Number lines: an alternative to nl, cat -n, less -N etc.

file="$1"
line_number=1

if [[ ! -f "$file" ]]; then
    printf "File %s does not exist\n" "$file" >&2
    exit 1
fi

while read -r line; do
    printf "%4d: %s\n" "$line_number" "$line"
    ((line_number++))
done <"$file"
