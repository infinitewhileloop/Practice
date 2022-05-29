#!/usr/bin/env bash

errors=0
path_dirs=$(echo "$PATH" | tr ':' '\n')

for dir in $path_dirs; do
    if [[ ! -d "$dir" ]]; then
        printf "** PATH contains invalid directory %s.\n" "$dir" >&2
        ((errors++))
    fi
done

declare -A env_vars
env_vars[SHELL]="$SHELL"
env_vars[HOME]="$HOME"
env_vars[PATH]="$PATH"
env_vars[EDITOR]="$EDITOR"
env_vars[MAILER]="$MAILER"
env_vars[PAGER]="$PAGER"

for key in "${!env_vars[@]}"; do
    # printf "Environment variable %-8s: %s\n" "$key" "${env_vars[$key]}"
    env_var="${env_vars[$key]}"
    if [[ -z "$env_var" ]]; then
        printf "** Environment variable %s is not set\n" "$key" >&2
        ((errors++))
    elif [[ "$key" != "HOME" && "$key" != "PATH" && ! -x "$env_var" ]]; then
        printf "%s set to %s, but I cannot find executable.\n" "$key" "$env_var" >&2
        ((errors++))
    fi
done

if ((errors != 0)); then
    printf "Errors encountered. Please notify sysadmin for help.\n" >&2
    exit 1
fi

exit 0
