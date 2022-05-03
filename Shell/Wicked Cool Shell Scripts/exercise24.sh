#!/usr/bin/env bash

# Translate any temperature between Fahrenheit, Celsius and Kelvin units

input="$1"
scale="4" # See also printf precision

# Validate input
if [[ ! "$input" =~ ^-?[[:digit:]]+[cCkKfF]?$ ]]; then
    printf "Invalid input\n" >&2
    exit 1
fi

last_char=${input:(-1)}               # get last character from input
input_wo_letter=${input%[^[:digit:]]} # remove trailing letter

# Calculate temperature in all 3 units
case "$last_char" in
C | c)
    cels="$input_wo_letter"
    fahr=$(echo "scale = $scale; $cels * 9 / 5 + 32" | bc)
    kelv=$(echo "scale = $scale; $cels + 273.15" | bc)
    ;;
K | k)
    kelv="$input_wo_letter"
    fahr=$(echo "scale = $scale; ($kelv - 273.15) * 9 / 5 + 32" | bc)
    cels=$(echo "scale = $scale; $kelv - 273.15" | bc)
    ;;
*)
    fahr="$input_wo_letter"
    kelv=$(echo "scale = $scale; ($fahr - 32) * 5 / 9 + 273.15" | bc)
    cels=$(echo "scale = $scale; ($fahr - 32) * 5 / 9" | bc)
    ;;
esac

printf "%-10s = %.2f\n" "Fahrenheit" "$fahr" "Celsius" "$cels" "Kelvin" "$kelv"

exit 0
