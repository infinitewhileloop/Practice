#!/usr/bin/env bash

# Verify that (possibly negative) integers are correctly formatted
# and check whether values are within a specified range

input="$1"
min="$2"
max="$3"
num_arg="$#"

usage() {
    printf "Usage %s: <number> [minimum_value] [maximum_value]\n" "$0"
    exit 1
}

# Exit if number of arguments is not 1 or 3
(( num_arg != 1 && num_arg != 3 )) && usage

# Function checks if input is a valid integer (can be negative)
is_number() {
    local input
    input="$1"
    [[ "$input" =~ ^-?[[:digit:]]+$ ]] 
    return
}

# Loop over all CLI arguments, check if they are valid integers
while [[ "$#" -gt 0 ]]; do
    if ! is_number "$1"; then
        printf "Error: %s is not a valid integer\n" "$1"
        exit 1
    fi
    shift
done

# Only 1 argument
if [[ "$num_arg" -eq 1 ]]; then
    printf "Your input is a valid integer\n"
    exit 0
fi

# If there are 3 arguments, compare if input is within range
if (( min <= input && input <= max )); then
    printf "Your input %d is a valid integer and within the range\n" "$input"
    exit 0
else
    printf "Your input %d is a valid integer but NOT within the range\n" "$input"
    exit 1
fi
