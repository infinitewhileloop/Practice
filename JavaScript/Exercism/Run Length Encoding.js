// https://exercism.org/tracks/javascript/exercises/run-length-encoding

function encode(input) {

    let charOccurence = [];
    let arr = [...input];  // convert input string to array
    for (let i = 0; i < arr.length; i++) {  // loop over each char
        if (i !== 0 && arr[i] === arr[i - 1]) {  // if char isn't first char and char is same as previous char
            let char = charOccurence[charOccurence.length - 1][0];
            let occurence = charOccurence[charOccurence.length - 1][1];
            charOccurence[charOccurence.length - 1] = [char, occurence + 1];
        } else {  // if char is first char or differs from previous char
            charOccurence.push([arr[i], 1]);
        }
    }

    let switchedArr = charOccurence.map(item => [item[1], item[0]]);  // switch e.g. ['W',7] to [7,'W']
    let flatArr = switchedArr.flat()  // flatten array
        .map(item => {  // remove 1's
            if (item !== 1) return item;
            else return '';
        });
    return flatArr.join('');
}

function decode(input) {

    let arr = input.match(/\d*./g) || [];  // extract number letter combinations
    let onesAdded = arr.map(item => {  // change e.g. 2A, B to 2A, 1B
        if (/^\d+.$/.test(item)) return item;
        else if (/^[^\d]$/.test(item)) return `1${item}`;
    }).filter(item => item !== undefined);

    let output = '';
    for (let item of onesAdded) {
        let number = item.match(/^\d+/)[0];
        let letter = item.match(/.$/)[0];
        output += letter.repeat(number);
    }
    return output;
}
