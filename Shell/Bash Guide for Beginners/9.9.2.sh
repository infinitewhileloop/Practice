#!/bin/bash

# Write a script that takes exactly one argument, a directory name. 
# If the number of arguments is more or less than one, print a usage message. 
# If the argument is not a directory, print another message. 
# For the given directory, print the five biggest files and the five files 
# that were most recently modified.

# Verify if there is exactly 1 argument
if [[ "$#" -ne 1 ]]; then
    echo "Usage: $0 dir_name"
    exit 1
fi

# Verify if the argument is a directory
if [[ ! -d "$1" ]]; then
    echo "Error: argument is not a directory"
    exit 1
fi

echo "For directory '$1', these are the five biggest files"
#list=$(ls -l "$1" | sort --key=5nr | head -n 5 | awk '{ print $8 }')
find "$1" -maxdepth 1 -type f -print0 | xargs -0 ls -Ssh | sort -z | head -5
echo

echo "For directory '$1', these are the five most recentely modified files"
find "$1" -maxdepth 1 -type f -printf "%T@ %Tc %p\n" | sort -nr | head -5 | cut -d' ' -f2-
