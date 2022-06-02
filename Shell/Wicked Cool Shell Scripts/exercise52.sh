#!/usr/bin/env bash

# archivedir--Creates a compressed archive of the specified directory

if [[ "$#" -ne 1 || ! -d "$1" || "$1" == "." ]]; then
    printf "Error: invalid input.\n" 1>&2
    exit 1
fi

script_name=$(basename "$0")
i_dir="$1"
num_of_blocks=$(du -s "$i_dir" | awk '{print $1}')

printf "Warning: directory %s is %d blocks. Proceed? [n] " "$i_dir" "$num_of_blocks"
read -r proceed_reply

if [[ "$proceed_reply" != "y" ]]; then
    printf "%s: archive of directory %s canceled.\n" "$script_name" "$i_dir"
    exit 1
fi

i_base_dir=$(basename "$i_dir")
o_file="${i_base_dir}.tgz"

if tar czf "$o_file" "$i_dir"; then
    printf "Directory %s archived as %s\n" "$i_dir" "$o_file"
else
    printf "Error: archiving %s to %s failed\n" "$i_dir" "$o_file" 1>&2
    exit 1
fi

exit 0
