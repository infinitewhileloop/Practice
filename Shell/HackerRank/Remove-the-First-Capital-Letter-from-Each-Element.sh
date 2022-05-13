#!/usr/bin/env bash

countries=() # declare array

while read -r country; do                                  # read file line by line
    country_with_dot=$(echo "$country" | sed 's/[A-Z]/./') # replace first capital letter by a dot
    countries+=("$country_with_dot")                       # add to array
done </dev/stdin

echo "${countries[@]}" # print all array items, space separated
