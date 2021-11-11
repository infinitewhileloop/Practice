// https://exercism.org/tracks/javascript/exercises/armstrong-numbers

const isArmstrongNumber = inputNum => {

    let inputStr = inputNum.toString();
    let numDigits = inputStr.length;
    return inputStr.split('').reduce((acc, cur) => acc + (cur ** numDigits), 0) === inputNum;
};
