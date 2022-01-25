// https://edabit.com/challenge/wzjRyguraKuZ5XiSE

const sortDigits = (num, order) => {

    const digits = [...String(num)];
    while (digits.length < 4) digits.push(0);
    const sorted = order === 'asc' ? digits.sort((a, b) => a - b) : digits.sort((a, b) => b - a);
    return Number(sorted.join(''));
}

function kaprekar(num, i = 0) {

    if (num === 6174) {
        return i;

    } else {
        num = sortDigits(num, 'desc') - sortDigits(num, 'asc');
        return kaprekar(num, ++i);
    }
}
