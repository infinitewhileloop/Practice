#!/bin/bash

# A script that checks whether a user exists in /etc/passwd

your_user="pi"
search=$(grep "^$your_user:" /etc/passwd)

if [[ -n "$search" ]]; then
    echo "User exists"
else
    echo "User doesn't exist"
fi
