#!/usr/bin/env bash

# Show how many days ago a date in the past was

if (($# != 3)); then
    script_name="$(basename "$0")"
    printf "Usage: %s month day year\n" "$script_name" >&2
    printf "Example: %s 7 20 1969\n" "$script_name" >&2
    exit 1
fi

in_date_fmt="${1}/${2}/${3}"
cur_date_unix=$(date +"%s")
prev_date_unix=$(date -d "$in_date_fmt" +"%s")
days_diff=$(((cur_date_unix - prev_date_unix) / 60 / 60 / 24))
cur_day_of_year=$(date +"%j")
cur_year=$(date +"%Y")

printf "%d days have elapsed between %s and today, day %d of %d.\n" \
    "$days_diff" "$in_date_fmt" "$cur_day_of_year" "$cur_year"

exit 0
