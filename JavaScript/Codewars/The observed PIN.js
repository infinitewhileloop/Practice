// https://www.codewars.com/kata/5263c6999e0f40dee200059d/

function getPINs(observed) {

    let splitDigits = observed.split('');

    // for all digits, get all adjacent digits
    const possibleDigits = [];
    splitDigits.forEach(digit => {
        possibleDigits.push(getPossibleDigits(digit));
    });

    // get all possible combinations from this 2D array ('Cartesian product')
    const combinations = combos(possibleDigits);

    // convert subarrays to joined strings
    return combinations.map(row => row.join(''));
}

// https://stackoverflow.com/questions/53311809/all-possible-combinations-of-a-2d-array-in-javascript
function combos(list, n = 0, result = [], current = []) {

    if (n === list.length) result.push(current);
    else list[n].forEach(item => combos(list, n + 1, result, [...current, item]));
    return result;
}

function getPossibleDigits(digit) {

    const obj = {
        '1': ['1', '2', '4'],
        '2': ['1', '2', '3', '5'],
        '3': ['2', '3', '6'],
        '4': ['1', '4', '5', '7'],
        '5': ['2', '4', '5', '6', '8'],
        '6': ['3', '5', '6', '9'],
        '7': ['4', '7', '8'],
        '8': ['5', '7', '8', '9', '0'],
        '9': ['6', '8', '9'],
        '0': ['0', '8']
    };

    return obj[digit];
}
