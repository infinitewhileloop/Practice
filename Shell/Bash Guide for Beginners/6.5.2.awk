BEGIN { print "The top three users of disk space in your root directory are:" }
{ print $1 " Mib is being used by " $2 }

# sudo du -m --max-depth=1 / 2>/dev/null | sort -nr | head -n 4 | tail -n 3 | awk -f disk_space.awk
