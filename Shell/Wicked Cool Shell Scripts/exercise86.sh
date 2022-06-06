#!/usr/bin/env bash

# Ascertain whether a given number is a prime

if [[ "$#" -ne 1 || ! "$1" =~ ^[0-9]+$ || "$1" -lt 2 ]]; then
    printf "Usage: %s <integer>\n" "$(basename "$0")" >&2
    exit 1
fi

int="$1"
divisor=2

while ((divisor < int)); do
    if ((int % divisor == 0)); then
        printf 'No, %d is not a prime\n' "$int"
        exit 0
    fi
    ((divisor++))
done

printf 'Yes, %d is a prime\n' "$int"
exit 0
