// https://edabit.com/challenge/E8WcotHKRGfYodchW

function sum(arr) {

    const numbers = arr.flat(Infinity)  // flatten array of arbitrary depth
        .map(item => item.replace(/[a-z]/gi,' '))  // replace all letters
        .filter(x => x !== '')  // remove empty array items
        .join(' ')  // join together in one string
        .match(/\-?\d+/g) || [];  // extract all numbers, inclusive minus character
    
    return numbers.reduce((acc, cur) => acc + +cur, 0);  // sum all numbers
}
