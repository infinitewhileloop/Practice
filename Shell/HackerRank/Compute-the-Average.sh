#!/usr/bin/env bash

sum=0
first_iter=true

while read -r line || [[ -n "$line" ]]; do # don't skip last line
    if [[ "$first_iter" == "true" ]]; then # 1st integer indicates number of integers
        num_of_integers="$line"
        first_iter=false
    else
        ((sum += line))
    fi
done </dev/stdin

average=$(echo "$sum"' / '"$num_of_integers" | bc -l)
printf "%.3f\n" "$average"
