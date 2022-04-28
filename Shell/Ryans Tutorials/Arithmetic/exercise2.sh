#!/usr/bin/env bash

cur_unix_timestamp=$(date +%s)
one_day_in_sec=$(( 60 * 60 * 24 ))
tomorrow_unix_timestamp=$(( cur_unix_timestamp + one_day_in_sec ))
tomorrow_human=$(date --date=@${tomorrow_unix_timestamp})
echo "$tomorrow_human"
