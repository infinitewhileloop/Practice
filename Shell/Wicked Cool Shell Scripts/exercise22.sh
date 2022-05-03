#!/usr/bin/env bash

# Displaying time in different time zones
# Enter a city and receive the local time
# Usage: ./script.sh london

num_arg="$#"

# More than 1 CLI argument
((num_arg > 1)) && echo "Too many arguments" && exit 1

# No CLI arguments
if ((num_arg == 0)); then
    printf "It's %s in UTC\n" "$(TZ="Etc/UTC" date)"
    exit 0
fi

# 1 CLI argument
input="$1"

# Check that time zone database exists
[[ -d /usr/share/zoneinfo ]] || (echo "Zonedir does not exist" && exit 1)

# Initialize
num_cities=0
initial_loop=1

# Continue until exactly 1 city is found (i.e. continue while e.g. 0 or 2 cities are found)
while ((num_cities != 1)); do

    # Skip stdin user input during 1st iteration (use CLI argument instead)
    if ((initial_loop != 1)); then
        printf "============================================\n"
        read -rp "Enter your city: " input
    fi
    # Don't skip stdin next time
    initial_loop=0

    # Find all cities matching user input
    cities=$(find /usr/share/zoneinfo -type f -not -path '*/posix/*' -not -path '*/right/*' -not -path '*/SystemV/*' -not -path '*/Etc/*' | cut -d'/' -f5- | grep -Ei "/.*$input.*$")

    # Calculate number of found cities
    if [[ "${#cities}" -eq 0 ]]; then # wc -l shows 1 even if nothing is found
        num_cities=0
    else
        num_cities=$(echo "$cities" | wc -l)
    fi

    # Show found cities, except if exactly 1 is found
    if ((num_cities != 1)); then
        printf "\nFound %d cities matching your query: \n%s\n" "$num_cities" "$cities"
    fi
done

# Strip the region from the city
city_wo_region=${cities##*/}

printf "It's %s in %s\n" "$(TZ="$cities" date)" "$city_wo_region"
exit 0
