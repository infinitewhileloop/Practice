// https://edabit.com/challenge/jN89tuARCFbtQm6vE

function ascending(str) {

    const strLen = str.length;

    // test if numbers are consecutive
    for (let i = 1; i <= strLen / 2; i++) {

        let regex = new RegExp(`\\d\{${i}\}`, 'g');  // extract i digits
        let numbers = str.match(regex);
        if (numbers.join('').length !== strLen) continue;  // check if all numbers have been extracted
        let isConsecutive = numbers.every((x, i) => {  // test if extracted numbers are consecutive
            if (i === 0) return true;
            else return Number(x) === Number(numbers[i - 1]) + 1;
        });
        if (isConsecutive) return true;
    }

    return false;
}
