// https://exercism.org/tracks/javascript/exercises/nth-prime

function prime(nthPrime) {

    if (nthPrime <= 0) throw new Error('there is no zeroth prime');

    const numbers = Array(nthPrime * 20).fill().map((_, i) => i); // create array of numbers 0 - ...
    numbers[0] = numbers[1] = 'x'; // skip 0 and 1
    numbers.forEach(number => { // loop over each number
        if (number === 'x') return; // skip if there is already an x
        else markMultiples(number); // mark multiples as x
    });
    const primes = numbers.filter(num => num !== 'x');

    function markMultiples(num) {
        let counter = 2;
        while (num * counter <= numbers.length) {
            numbers[num * counter] = 'x';
            counter++;
        }
    };

    return primes[nthPrime - 1];
}
