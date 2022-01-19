// https://edabit.com/challenge/RaxaX4wmKKCsrzKwJ

function divide(inputArr, max) {

    const sum = arr => arr.reduce((cur, acc) => cur + acc, 0);

    return inputArr.reduce((acc, cur) => {
        if (acc.length === 0) acc.push([cur]);
        else if (sum(acc[acc.length - 1]) + cur <= max) acc[acc.length - 1].push(cur);
        else acc.push([cur]);
        return acc;
    }, []);
}
