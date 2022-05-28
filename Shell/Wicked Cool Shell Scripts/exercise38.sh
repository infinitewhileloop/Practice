#!/usr/bin/env bash

mb=$(df 2>/dev/null | awk '$4 ~ /^[0-9]+$/ {sum += $4} END{print sum / 1024}')
gb=$((mb / 1024))

printf "%d MB (%d GB) of available disk space\n" "$mb" "$gb"
