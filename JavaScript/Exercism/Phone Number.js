// https://exercism.org/tracks/javascript/exercises/phone-number

const clean = input => {

    let extractedDigits = input.match(/\d/g).join('');
    let pattern = /^1?[2-9]\d{2}[2-9]\d{6}$/;
    let result = extractedDigits.slice(-10);

    if (/[a-z]/.test(input)) throw new Error('Letters not permitted');
    if (/[!@:]/.test(input)) throw new Error('Punctuations not permitted');
    if (extractedDigits.length > 11) throw new Error('More than 11 digits');
    if (extractedDigits.length !== 10 && extractedDigits.length !== 11) throw new Error('Incorrect number of digits');
    if (extractedDigits.length === 11 && !extractedDigits.startsWith('1')) throw new Error('11 digits must start with 1');

    if (result[0] === '0') throw new Error('Area code cannot start with zero');
    if (result[0] === '1') throw new Error('Area code cannot start with one');
    if (result[3] === '0') throw new Error('Exchange code cannot start with zero');
    if (result[3] === '1') throw new Error('Exchange code cannot start with one');

    if (pattern.test(extractedDigits)) return result;
}
