// https://exercism.org/tracks/javascript/exercises/matching-brackets

const isPaired = input => {

    let otherChars = /[^\[\]\{\}\(\)]/g;
    input = input.replace(otherChars, ''); // remove any non bracket characters

    let bracketCombinations = /(\[\])|({})|(\(\))/;
    while (bracketCombinations.exec(input)) {  // remove any bracket combinations
        input = input.replace(bracketCombinations, '');
    }

    let singleBrackets = /\[|\]|\{|\}|\(|\)/;
    return ! singleBrackets.test(input)  // test if there are any single brackets left
};
