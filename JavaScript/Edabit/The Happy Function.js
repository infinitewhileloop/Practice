// https://edabit.com/challenge/NMCc4pcDx6d7hkvcu

function happyAlgorithm(num, counter = 0, prev = [num]) {

    num = num.toString().split('').map(x => Math.pow(+x, 2)).reduce((acc, cur) => acc + cur, 0);

    counter++;

    if (num === 1) {
        return `HAPPY ${counter}`;

    } else if (!prev.includes(num)) {
        prev.push(num);
        return happyAlgorithm(num, counter, prev);

    } else {
        return `SAD ${counter}`;
    }
}
