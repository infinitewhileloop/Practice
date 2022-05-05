#!/usr/bin/env bash

# Convert 'ls' full-word flags to one-letter flags

# Initialize
new_cmd=""

# Loop over all CLI arguments
for arg; do

    # If argument is a long option
    if [[ "${arg:0:2}" == "--" ]]; then
        case "$arg" in
        --all) new_cmd+=" -a" ;;
        --almost-all) new_cmd+=" -A" ;;
        --hide-control-chars) new_cmd+=" -q" ;;
        --recursive) new_cmd+=" -R" ;;
        *) continue ;;
        esac
    # If argument is not a long option
    else
        new_cmd+=" $arg"
    fi
done

# Remove leading space
new_cmd="${new_cmd# *}"

# Execute
eval "$new_cmd"
