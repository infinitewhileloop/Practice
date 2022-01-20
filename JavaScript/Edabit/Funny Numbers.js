// https://edabit.com/challenge/dwktbd4JZPMEHAj7k

function funnyNumbers(n, p) {

    let sum = n.toString().split('').reduce((acc, cur, i) => {
        return acc + cur ** (p + i);
    }, 0);

    return (sum % n) === 0 ? (sum / n) : null;
}
