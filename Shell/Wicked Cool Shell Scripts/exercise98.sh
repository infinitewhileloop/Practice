#!/usr/bin/env bash

# Extract GPS information from pictures

if [[ "$#" -eq 0 ]]; then
    printf "Usage: %s picture.jpg\n" "$(basename "$0")" >&2
    exit 1
fi

for image; do

    gps_data=$(identify -format '%[EXIF:*]' "$image" | grep 'exif:GPSL')
    if [[ -z "$gps_data" ]]; then
        printf "The image '%s'does not contain GPS data\n" "$image"
        continue
    fi

    lat_deg=$(echo -e "$gps_data" | grep -oP 'GPSLatitude=\K\d+')
    lat_min=$(echo -e "$gps_data" | grep -oP 'GPSLatitude=[^,]+, \K\d+')
    lat_sec_calc=$(echo -e "$gps_data" | grep -oP 'GPSLatitude=[^,]+,[^,]+, \K.+')
    lat_sec=$(echo "$lat_sec_calc" | bc -l)
    lat_let=$(echo -e "$gps_data" | grep -oP 'GPSLatitudeRef=\K[A-Z]')

    lon_deg=$(echo -e "$gps_data" | grep -oP 'GPSLongitude=\K\d+')
    lon_min=$(echo -e "$gps_data" | grep -oP 'GPSLongitude=[^,]+, \K\d+')
    lon_sec_calc=$(echo -e "$gps_data" | grep -oP 'GPSLongitude=[^,]+,[^,]+, \K.+')
    lon_sec=$(echo "$lon_sec_calc" | bc -l)
    lon_let=$(echo -e "$gps_data" | grep -oP 'GPSLongitudeRef=\K[A-Z]')

    printf "Coords: %d %d' %.2f\" %s, %d %d' %.2f\" %s\n" "$lat_deg" "$lat_min" "$lat_sec" "$lat_let" "$lon_deg" "$lon_min" "$lon_sec" "$lon_let"
done

exit 0
