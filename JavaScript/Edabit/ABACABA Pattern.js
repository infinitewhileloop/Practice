// https://edabit.com/challenge/ny6ErMLiGWeL6up3v

function abacabaPattern(n) {

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let i = 0;
    let prevPattern = '';

    while (i < n) {
        let newLetter = alphabet[i];
        prevPattern = prevPattern + newLetter + prevPattern;
        i++;
    }

    return prevPattern;
}
