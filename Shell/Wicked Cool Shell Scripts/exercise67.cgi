#!/usr/bin/env bash

echo "Content-type: text/html"
echo ""

printf '<!DOCTYPE html>
<html lang="en">
<head>
    <title>Album</title>
    <style>
    div.relative {
        position: relative;
        display: inline;
    }
    div.absolute {
        position: absolute;
        left: 150px;
        bottom: 5px;
    }
    </style>
</head>
<body>
'

for pic in /var/www/html/*.jpg; do
    base=$(basename "$pic")
    printf '
    <div class="relative">
        <img src="/%s" width="300px" style="margin:20px;">
        <div class="absolute">%s</div>
    </div>
    ' "$base" "$base"
done

printf '</body></html>'

exit 0
