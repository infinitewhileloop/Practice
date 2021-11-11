// https://exercism.org/tracks/javascript/exercises/isbn-verifier

const isValid = input => {

    let woInvalidChars = input.replace(/[^\dX]/g, '');  // remove all chars except digits or 'X'

    if (! /^\d{9}[\dX]$/.test(woInvalidChars)) return false;  // verify if format is correct

    let numbersArr = [...woInvalidChars].map(item => item === 'X' ? 10 : Number(item));  // convert string to array of numbers and replace X by 10

    let checksum = numbersArr.reduce((acc, cur, i) => acc + (cur * (10 - i)), 0);  // 1st number * 10 + 2nd number * 9 etc.

    return checksum % 11 === 0;
}
