#!/usr/bin/env bash

# Analyses an Apache-format access_log file

log_file="$1"

if [[ ! -f "$log_file" || ! -r "$log_file" ]]; then
    printf "Error: input\n" >&2
    exit 1
fi

start_date=$(head -n 1 "$log_file" | grep -oP '\[\K[^:]+(?=:)')
start_time=$(head -n 1 "$log_file" | grep -oP '\[.{11}:\K.{8}')
end_date=$(tail -n 1 "$log_file" | grep -oP '\[\K[^:]+(?=:)')
end_time=$(tail -n 1 "$log_file" | grep -oP '\[.{11}:\K.{8}')
hits=$(wc -l "$log_file" | sed -E 's/ .*$//')
pageviews=$(grep -ivPc 'GET[^"]+\.(jpg|jpeg|gif|png) ' "$log_file")
transferred=$(awk '{sum+=$10} END{print sum}' "$log_file")

printf "Results of analyzing log file %s\n\n" "$log_file"
printf "%12s:  %s %s\n" \
    "Start date" "$start_date" "at $start_time" \
    "End date" "$end_date" "at $end_time" \
    "Hits" "$hits" "(total accesses)" \
    "Pageviews" "$pageviews" "(hits minus graphics)" \
    "Transferred" "$transferred" "bytes"

printf "\nThe ten most popular pages were:\n"
awk '{print $7}' "$log_file" | sort | uniq -c | sort -nr | head -n 10

printf "\nThe ten most commom referrer URLs were:\n"
awk '$11 !~ /^"-"$/{print $11}' "$log_file" | sort | uniq -c | head -n 10

exit 0
