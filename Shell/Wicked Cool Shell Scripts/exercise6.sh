#!/usr/bin/env bash

# Validating a floating-point value

validfloat() {
    local input="$1"

    if [[ "$#" -ne 1 || -z "$input" ]]; then
        printf "Usage: %s <float>\n" "$0"
        exit 1
    fi

    if [[ "$input" =~ ^-?[[:digit:]]*\.[[:digit:]]+$ ]]; then
        printf "%s is a valid floating-point value.\n" "$input"
    else
        printf "Invalid format!\n"
    fi
}

validfloat "$1"
