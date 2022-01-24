// https://edabit.com/challenge/JJtafXGmNegpQMp6p

function depth(arr) {

    let completelyFlat = JSON.stringify(arr.flat(Infinity));
    let i = 0;

    while (true) {
        if (JSON.stringify(arr.flat(i)) === completelyFlat) break;
        else i++;
    }

    return ++i;
}
