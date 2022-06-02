#!/usr/bin/env bash

i_code="$1"

if [[ "$#" -ne 1 || ! "$i_code" =~ ^[[:digit:]]{3}$ ]]; then
    printf "Error: invalid input\n" >&2
    exit 1
fi

area=$(curl -s https://www.bennetyee.org/ucsd-pages/area.html | grep -oP 'name="'"$i_code"'.*>\s*\K[^(]+(?=\s*\()')

printf "Area code %d = %s\n" "$i_code" "${area:-Not found}"

exit 0
