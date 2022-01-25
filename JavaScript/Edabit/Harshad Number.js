// https://edabit.com/challenge/Rrauvu8afRbjqPM8L

function isHarshad(n) {
    
    return n % [...String(n)].reduce((acc, cur) => acc + +cur, 0) === 0;
}
