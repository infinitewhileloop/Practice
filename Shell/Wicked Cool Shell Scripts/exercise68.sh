#!/usr/bin/env bash

# randomquote

input_file="$1"
if [[ ! -f "$input_file" || "$#" -ne 1 ]]; then
    printf "Invalid input\n" >&2
    exit 1
fi

num_lines=$(wc -l "$input_file" | sed -E 's/\s+.*$//')
rand_int=$(((RANDOM % num_lines) + 1))

sed -n "$rand_int"'p' "$input_file"
