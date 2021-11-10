// https://exercism.org/tracks/javascript/exercises/collatz-conjecture

const steps = input => {

    if (isNaN(input) || input <= 0) throw new Error('Only positive numbers are allowed');

    let counter = 0;
    while (input !== 1) {
        if (input % 2 === 0) input /= 2;
        else input = input * 3 + 1;
        counter++;
    }
    return counter;
};
