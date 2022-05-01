#!/usr/bin/env bash

# Count how many executable commands are in your current PATH

# Get all the directories mentioned in $PATH
path_dirs=$(echo "$PATH" | tr ':' '\n')

# Loop over each $PATH directory one by one and add its number of lines to total
total=0
while read -r dir; do

    # Stop this iteration  iteration if directory isn't existing
    [[ -d "$dir" ]] || continue

    # Get number of commands in this directory
    temp=$(ls "$dir" | wc -l)

    # Add number of commands to total
    ((total += temp))

done < <(echo "$path_dirs")

printf "The total number of commands in your PATH is %d\n" "$total"

exit 0
