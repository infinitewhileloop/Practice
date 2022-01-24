// https://edabit.com/challenge/c8cLz2vX6NiBKRYmm

function isHeteromecic(n) {

    let arr = Array(Math.ceil(n / 2 + 1)).fill(0).map((x, i) => i);

    for (let num of arr) {
        if (num * (num + 1) === n) return true;
    }

    return false;
}
