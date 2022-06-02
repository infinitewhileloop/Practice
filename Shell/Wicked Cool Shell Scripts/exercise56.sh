#!/usr/bin/env bash

zip="$1"

city_state=$(curl -s http://www.city-data.com/zips/"$zip".html | grep -oP '<title>.*\(\K([^\)]*)')

printf "ZIP code %s is in %s\n" "$zip" "${city_state:-Unknown}"

exit 0
