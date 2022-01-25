// https://edabit.com/challenge/meN5CH6RztnwXCXBz

function isHarshad(n, sumDigits) {
    
    if (n < 0) return false;
    else if (n === 0) return true;
    else if (sumDigits) return isHarshad(n - sumDigits, sumDigits);
    else {
        const calcSumDigits = [...String(n)].reduce((acc, cur) => acc + +cur, 0);
        return isHarshad(n - calcSumDigits, calcSumDigits);
    }
}
