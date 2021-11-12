// https://exercism.org/tracks/javascript/exercises/transpose

function transpose(input) {

    let longestStrLength = Math.max(...input.map(item => item.length));  // calculate length of longest string item in input array

    let output = [];
    for (let charIndex = 0; charIndex < longestStrLength; charIndex += 1) {  // loop over all characters of the string items
        let newItem = '';  // temporary var
        input.forEach((inputItem, inputItemIndex) => {  // add e.g. the 2nd char of each item to the temporary var
            if (charIndex === longestStrLength - 1 && inputItemIndex === input.length - 1) newItem += (inputItem[charIndex] || '');  // no trailing space for last char in last item
            else newItem += (inputItem[charIndex] || ' ');  // add char or space to temp var
        });
        charIndex === longestStrLength - 1 ? output.push(newItem.replace(/\s+$/, '')) : output.push(newItem); // no trailing space for last char in last item
    }

    return output;
}
  
