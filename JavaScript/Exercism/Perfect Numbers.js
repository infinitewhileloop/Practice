// https://exercism.org/tracks/javascript/exercises/perfect-numbers/

const classify = input => {

    if (input < 1) throw new Error('Classification is only possible for natural numbers.');

    let aliquotSum = getAliquotSum(input);

    if (aliquotSum < input) return 'deficient';
    else if(aliquotSum > input) return 'abundant';
    else return 'perfect';
}

const getAliquotSum = input => {

    let factors = [];
    for (let i = 1; i <= input / 2; i++) {
        if (input % i === 0) factors.push(i);
    }
    return factors.reduce((acc, cur) => acc + cur, 0);
}
