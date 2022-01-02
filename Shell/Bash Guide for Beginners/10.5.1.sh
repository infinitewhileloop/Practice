#!/bin/bash

# Display the name of the script being executed.
echo "The script '$0' is being executed."

# Display the first, third and tenth argument given to the script.
echo -e "1st argument: $1\n3rd argument: $3\n10th argument: ${10}"

# Display the total number of arguments passed to the script.
echo "$# arguments were passed to this script."

# If there were more than three positional parameters, use shift 
# to move all the values 3 places to the left.
if [[ "$#" -gt 3 ]]; then
    shift 3
fi

# Print all the values of the remaining arguments.
echo "$*"

# Print the number of arguments.
echo "There are $# remaining arguments."
