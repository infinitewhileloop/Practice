// https://exercism.org/tracks/javascript/exercises/wordy/

function answer(inputStr) {

    const woQuestionMark = inputStr.slice(0, -1); // remove trailing '?'
    const split = woQuestionMark.split(' ');
    validateInput(split);

    split.splice(0, 2); // remove 'What is'
    const woBy = split.filter(item => item !== 'by'); // remove 'by' if present
    checkSyntax(woBy);

    const converted = convert(woBy); // replace e.g. 'plus' by '+' and convert array to string

    return evalParts(converted);
}


function validateInput(arr) {

    const legalWords = ['What', 'is', 'plus', 'minus', 'multiplied', 'divided', 'by', 'raised', 'to', 'the', 'power'];

    arr.forEach(word => {
        if (!legalWords.includes(word) && isNaN(word)) throw new Error('Unknown operation');
    });
}

function checkSyntax(arr) {

    const isOrderOk = arr.every((word, index) => {
        if (index % 2) return isNaN(word); // odd items should be text, e.g. 'plus'
        else return !isNaN(word); // even items should be integers
    });

    const isLastItemOk = !isNaN(arr[arr.length - 1]); // last item should be number

    // arr should not be empty
    if (!isOrderOk || !isLastItemOk || !arr.length) throw new Error('Syntax error');
}

function convert(arr) {

    const operations = {
        plus: '+',
        minus: '-',
        multiplied: '*',
        divided: '/'
    };

    arr.forEach((x, i) => {
        if (operations.hasOwnProperty(x)) {
            arr[i] = operations[x];
        }
    });

    return arr;
}

function evalParts(arr) {

    while (arr.length > 1) {

        const part = arr.splice(0, 3);
        const res = eval(part.join(' '));
        arr.splice(0, 0, res);
    }

    return Number(arr[0]);
}
