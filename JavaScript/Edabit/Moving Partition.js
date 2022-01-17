// https://edabit.com/challenge/MJKYcPsw34sWbcqP8

function movingPartition(arr) {

    return arr.reduce((acc, cur, i) => {
        if (i < arr.length - 1) {
            acc.push([arr.slice(0, i + 1), arr.slice(i + 1, arr.length)]);
        }
        return acc;
    }, []);
}
