#!/usr/bin/env bash

# A frontend to bc

scale=5
num_arg="$#"

# Non-interactive mode if there are arguments
if ((num_arg > 0)); then
    echo "scale = $scale; $*" | bc --mathlib
    exit 0
fi

# Interactive mode if 0 arguments

printf "Calc--a simple calculator. Enter 'help' for help, 'quit' to quit.\n"

show_help() {
    cat <<EOF
In addition to standard math functions, calc also supports:

a % b remainder of a/b
a ^ b exponential: a raised to the b power
s(x) sine of x, x in radians
c(x) cosine of x, x in radians
a(x) arctangent of x, in radians
l(x) natural log of x
e(x) exponential log of raising e to the x
j(n,x) Bessel function of integer order n of x
scale N show N fractional digits (default = 2)
EOF
}

while true; do
    read -rp "calc> " input
    case "$input" in
    help) show_help ;;
    quit) exit 0 ;;
    *) echo "scale = $scale; $input" | bc --mathlib ;;
    esac
done
