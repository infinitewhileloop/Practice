#!/usr/bin/env bash

# Validating date formats
# Ensure that a specific date is actually possible on the calendar

input="$1"

# Check if input is in 2022-05-01 format
if [[ ! "$input" =~ ^[1-2][0-9]{3}\-[0-1][0-9]\-[0-3][0-9]$ ]]; then
    printf "Your input %s is not formatted as an ISO date\n" "$input"
    exit 1
fi

# Extract parts
year=$(echo "$input" | cut -d'-' -f1)
month=$(echo "$input" | cut -d'-' -f2)
day=$(echo "$input" | cut -d'-' -f3)

# Remove leading zeros
month=${month#0}
day=${day#0}

# Check for prima facie invalid months and days
if ((month <= 0 || month >= 13)); then
    printf "%s is not a valid month\n" "$month"
    exit 1
fi
if ((day <= 0 || day >= 32)); then
    printf "%s is not a valid day\n" "$day"
    exit 1
fi

# If day is 31, check if this is possible
if ((day == 31)); then
    IFS="|"
    months_no_31_days=("2${IFS}4${IFS}6${IFS}9${IFS}11")
    if [[ "${IFS}${months_no_31_days[*]}${IFS}" =~ "${IFS}${month}${IFS}" ]]; then
        printf "There aren't 31 days in month %s\n" "$month"
        unset IFS
        exit 1
    fi
    unset IFS
fi

# February
if ((month == 2)); then
    if ((day == 30)); then
        printf "There aren't 30 days in February\n"
        exit 1
    fi
    if ((day == 29)); then
        if ((year % 4 != 0 || (year % 100 == 0 && year % 400 != 0))); then
            printf "%s is not a leap year, so there aren't 29 days in February\n" "$year"
            exit 1
        fi
    fi
fi

printf "%s is a valid date\n" "$input"
exit 0
