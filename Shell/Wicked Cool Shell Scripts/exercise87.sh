#!/usr/bin/env bash

# Parse requested dice to roll and simulate those rolls

roll() {
    local rand
    rand=$(((RANDOM % sides) + 1))
    echo "$rand"
}

total=0

while (($# >= 1)); do

    counter=0
    sum=0
    in="$1"
    num_rolls=${in%d*}
    num_rolls=${num_rolls:-1}
    sides=${in#*d}

    printf "rolling %d %d-sided die\n" "$num_rolls" "$sides"

    while ((counter < num_rolls)); do
        ((counter++))
        rand=$(roll)
        printf "  roll #%d = %d\n" "$counter" "$rand"
        ((sum += rand))
    done

    printf "I rolled %s and it added up to %d\n" "$in" "$sum"
    ((total += sum))
    shift
done

printf "In total, all of those dice add up to %d\n" "$total"
exit 0
