#!/bin/bash

read -p "Enter your age here: " age

if [[ ! "$age" =~ ^[0-9]{1,3}$ ]]; then
    echo "Invalid value"
    exit 1;
fi

if [[ "$age" -ge 16 ]]; then
    echo "You are allowed to drink alcohol."
else
    age_diff=$((16 - age))
    echo "You have to wait $age_diff years before legally being allowed to drink."
fi

if [[ "$age" -ge 18 ]]; then
    beer_total=$(( (age - 16) * 100))
    echo "Statistically you have drunk $beer_total liters of beer."
fi
