// https://exercism.org/tracks/javascript/exercises/grains/

const square = num => {
    if (num < 1 || num > 64) throw new Error('square must be between 1 and 64');
    return 2n ** BigInt(--num);
};

const total = () => {
    let result = 0n;
    for (let i = 1; i <= 64; i++) {
        result += square(i);
    }
    return result;
};
