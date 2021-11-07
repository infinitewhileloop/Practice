// https://exercism.org/tracks/javascript/exercises/diamond/

function rows(letter) {

    if (letter === 'A') return ['A'];

    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let indexLetter = alphabet.indexOf(letter);  // e.g. 0 for 'A'
    let firstPart = alphabet.slice(0, indexLetter);
    let lastPart = firstPart.split('').reverse().join('');
    let lettersNeeded = firstPart + letter + lastPart; // e.g. 'ABCBA'
    let rowWidth = lettersNeeded.length;  // e.g. 5 for 'ABCBA': width of 5 chars and 5 items in array
    let result = [];

    result.push(' '.repeat((rowWidth - 1) / 2) + lettersNeeded[0] + ' '.repeat((rowWidth - 1) / 2));  // first row

    let upperRows = [];  // top rows of diamond
    for (let i = 1; i < (Math.floor(rowWidth / 2)); i++) {  
        let rowPart1 = ' '.repeat((rowWidth - 1) / 2 - i);
        let rowPart2 = lettersNeeded[i];
        let rowPart3 = ' '.repeat(Math.max(0, i * 2 - 1));
        let rowPart4 = lettersNeeded[i];
        let rowPart5 = ' '.repeat((rowWidth - 1) / 2 - i);
        let row = rowPart1 + rowPart2 + rowPart3 + rowPart4 + rowPart5;
        upperRows.push(row);
    }
    result.push(...upperRows);

    result.push(letter + ' '.repeat(rowWidth - 2) + letter); // middle row of diamond

    result.push(...upperRows.reverse());  // bottom rows of diamond

    result.push(' '.repeat((rowWidth - 1) / 2) + lettersNeeded[0] + ' '.repeat((rowWidth - 1) / 2));  // last row

    return result;
}
