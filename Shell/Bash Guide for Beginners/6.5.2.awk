BEGIN { print "The top three users of disk space in your home directory are:" }
{ print $1 " Mib is being used by " $2 }

# du -m --max-depth=1 /home/pi | sort -nr | head -n 4 | tail -n 3 | awk -f 6.5.2.awk 
