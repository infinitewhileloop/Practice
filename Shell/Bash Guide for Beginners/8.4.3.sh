#!/bin/bash

home_dir="/home/pi/playground/testdir"
backup_dir="/home/pi/playground/backups"
backup_file="$backup_dir/home_backup.tgz"

# Verify the script is run without arguments
if [[ "$#" -ne 0 ]]; then
    echo "Usage: $0"
    echo "Don't use any arguments"
    exit 1
fi

# Check if there's enough free space to hold backup
home_space=$(du -s $home_dir | cut -f 1)
if [[ ! "$home_space" =~ ^[0-9]+$ ]]; then
    echo "Recording disk space of home folder failed"
    exit 1
fi

free_space=$(df $backup_dir --output=avail | grep -v Avail)
if [[ ! "$free_space" =~ ^[0-9]+$ ]]; then
    echo "Recording free space failed"
    exit 1
fi

if [[ "$free_space" -le "$home_space" ]]; then
    echo "Not enough free space to hold backup"
    exit 1
fi

# Ask user if they want full or incremental backup
echo -e "Do you want a full or an incremental backup?\n\
1) Full\n2) Incremental"
read -n 1 -p "Enter 1 or 2: " backup_method
echo

if [[ "$backup_method" -ne 1 && "$backup_method" -ne 2 ]]; then
    echo "Enter a valid number"
    exit 1
fi

if [[ ! -f "$backup_file" ]]; then
    echo "No full backup exists yet, full backup will be taken"
    backup_method=1
fi

if [[ -f "$backup_file" && "$backup_method" -eq 2 ]]; then
    current_time=$(date +%s)
    time_last_modification=$(stat --format="%Y" "$backup_file")
    time_diff=$((current_time - time_last_modification))
    one_week_in_secs=$((60 * 60 * 24 * 7))
    if [[ "$time_diff" -ge "$one_week_in_secs" ]]; then
        echo "Backup is older than a week, so incremental backup is not possible"
        echo "Full backup will be taken"
        backup_method=1
    fi
fi

# Compress the backup
case "$backup_method" in
    1)
        echo "Performing full backup... Please be patient"
        tar -czvf "$backup_file" "$home_dir"
        ;;
    2)
        echo "Performing incremental backup..."
        ;;
    *)
        echo "Invalid backup method"
        exit 1
        ;;
esac

# Inform user about size compressed backup
echo "Backup has been finished"
backup_size=$(ls -lh "$backup_file" | awk '{ print $5 }' )
echo "The size of your backup is: $backup_size"
