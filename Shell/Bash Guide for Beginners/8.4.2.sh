#!/bin/bash

if [[ "$#" -ne 1 ]]; then
    echo "Usage: $0 filename"
    echo "Add exactly one file as an argument"
    exit 1
fi

file="$1"
if [[ ! -f "$file" ]]; then
    echo "The argument is not a file"
    exit 1
fi

echo "How do you want to compress file $file?"
cat << COMPRESSION
gzip
bzip2
zip
COMPRESSION

read -p "Your choice of compression: " compression
success_msg="The file has been compressed."

case "$compression" in
    gzip)
        gzip -c "$file" > "${file}_compressed.gz"
        echo "$success_msg"
        ;;
    bzip2)
        bzip2 -zc "$file" > "${file}_compressed.bz2"
        echo "$success_msg"
        ;;
    zip)
        zip "${file}_compressed.zip" "$file"
        echo "$success_msg"
        ;;
    *)
        echo "Choose a valid compression method"
        exit 1
        ;;
esac
