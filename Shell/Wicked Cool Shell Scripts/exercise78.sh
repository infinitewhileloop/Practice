#!/usr/bin/env bash

# Renices the job that matches the specified name

script_name=$(basename "$0")
nice_val=1
filter_user=0
filter_tty=0

show_usage() {
    printf "Usage: %s [-n niceval] [-u user|-t tty] pattern\n" "$script_name" >&2
}

while getopts ':n:u:t:' OPTION; do
    case "$OPTION" in
    n)
        nice_val="$OPTARG"
        ;;
    u)
        username="$OPTARG"
        filter_user=1
        ;;
    t)
        tty="$OPTARG"
        filter_tty=1
        ;;
    ?)
        show_usage
        exit 1
        ;;
    esac
done
shift "$((OPTIND - 1))"

in_proc_name="$1"
if [[ "$#" -ne 1 ]]; then
    show_usage
    exit 1
fi

if ((filter_user + filter_tty > 1)); then
    printf "Error: -u and -t cannot be combined\n" >&2
    show_usage
    exit 1
fi

if [[ filter_user -eq 1 ]]; then
    ps=$(ps -eF | awk '$11=="'"$in_proc_name"'"&&$1=="'"$username"'"   {printf "  user %-8s pid %-8d job %s\n", $1, $2, $11}')
elif [[ filter_tty -eq 1 ]]; then
    ps=$(ps -eF | awk '$11=="'"$in_proc_name"'"&&$9=="'"$tty"'"   {printf "  user %-8s pid %-8d job %s\n", $1, $2, $11}')
else
    ps=$(ps -eF | awk '$11=="'"$in_proc_name"'"{printf "  user %-8s pid %-8d job %s\n", $1, $2, $11}')
fi

if [[ -z "$ps" ]]; then
    printf "%s: no process matches pattern %s\n" "$script_name" "$in_proc_name" >&2
    exit 1
fi

num_of_procs=$(echo "$ps" | wc -l)
if ((num_of_procs > 1)); then
    printf "%s: more than one process matches pattern %s:\n" "$script_name" "$in_proc_name" >&2
    echo "$ps"
    exit 1
fi

pid=$(echo "$ps" | awk '{print $4}')
printf "Renicing job \"%s\" (%d)\n" "$in_proc_name" "$pid"
renice -n "$nice_val" -p "$pid" &>/dev/null

exit 0
