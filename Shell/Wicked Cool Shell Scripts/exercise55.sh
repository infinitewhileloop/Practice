#!/usr/bin/env bash

# githubuser--Given a GitHub username, pulls information about the user

if [[ "$#" -ne 1 ]]; then
    printf "Invalid input\n" >&2
    exit 1
fi

trap '$(which rm) -f $tmp_file' EXIT

username="$1"
tmp_file="/tmp/github-dump-${username}.$$"

if ! lynx -dump "http://www.github.com/${username}/" >"$tmp_file"; then
    printf "Error\n" >&2
    exit 1
fi

full_name=$(grep -P '(?<!report) '"$username"'$' "$tmp_file" | sed -E 's# \w+$##')
num_followers=$(grep -Po '(?<=\d])\d+(?= followers)' "$tmp_file")
num_following=$(grep -Po '(?<=\d])\d+(?= following)' "$tmp_file")

printf '%s is the name of the GitHub user.
They have %d followers.
They are following %d other users.\n' "${full_name:-Unknown}" "$num_followers" "$num_following"

exit 0
