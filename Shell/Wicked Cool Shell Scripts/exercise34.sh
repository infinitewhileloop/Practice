#!/usr/bin/env bash

# Compress file using different methods
# Only keep smallest file

for file; do
    ext="${file##*.}"

    # Validate arguments
    if [[ ! -f "$file" ]]; then
        printf "%s is not a file\n" "$file" >&2
        continue
    fi
    if [[ "$ext" == "gz" || "$ext" == "bz2" ]]; then
        printf "File %s is already compressed\n" "$file" >&2
        continue
    fi

    # Compress files using different compression methods
    bzip2 --keep "$file"
    gzip --keep "$file"

    # Compare file sizes of compressed files
    smallest_file=$(ls -lSr "${file}".* | awk 'NR==1 { print $(NF) }') # -S sorts by file size largest first, -r reverses order. AWK gets last column of first line
    smallest_ext="${smallest_file##*.}"

    # Remove unnecessary compressed files
    for compressed_file in "${file}".*; do
        if [[ ! "$compressed_file" -ef "$smallest_file" ]]; then
            rm -f "$compressed_file"
        fi
    done

    printf "Best compression is with %s. File renamed %s\n" "$smallest_ext" "$smallest_file"
done
