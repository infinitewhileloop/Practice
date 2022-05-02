#!/usr/bin/env bash

# Alternative for the ls command
# Showing files with their size
# And directories with the number of files they contain

# Quit if argument doesn't exist
if [[ ! -e "$1" ]]; then
    printf "%s does not exist\n" "$1"
    exit 1
fi

# Quit if argument is not a directory
if [[ ! -d "$1" ]]; then
    printf "%s is not a directory, executing normal ls\n" "$1"
    exec ls -l "$1"
fi

# Loop over all files and directories in the given directory
for filename in "$1"/*; do

    basename=$(basename "$filename")

    # Files
    if [[ -f "$filename" ]]; then
        file_size=$(du -h "$filename" | awk '{ print $1 }')
        printf "%-30.30s %5s\n" "$basename" "$file_size"

    # Directories
    elif [[ -d "$filename" ]]; then
        num_of_files=$(ls "$filename" 2>/dev/null | wc -l)
        case "$num_of_files" in # 1 file, but 3 file*s*
        1) files_word="file" ;;
        *) files_word="files" ;;
        esac
        printf "%-30.30s %5s %s\n" "$basename" "$num_of_files" "$files_word"
    fi
done
