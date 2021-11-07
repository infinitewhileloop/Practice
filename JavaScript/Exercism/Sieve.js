// https://exercism.org/tracks/javascript/exercises/sieve

function primes(max) {

    let allNumbers = {};

    for (let i = 2; i <= max; i++) {  // create object with all numbers and mark these as prime
        allNumbers[i] = 'p';
    }

    for (let j = 2; j <= max; j++) {  // loop over all numbers in object
        if (allNumbers[j] == 'n') continue;  // continue if already marked as non-prime
        for (let k = j + j; k <= max; k += j) {  // mark multiples as non-prime
            allNumbers[k] = 'n';
        }
    }

    let onlyPrimes = Object.entries(allNumbers)  // filter numbers marked as prime
        .filter(item => item.includes('p'))
        .map(item => +item[0]);

    return onlyPrimes;
}
