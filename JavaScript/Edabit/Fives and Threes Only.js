// https://edabit.com/challenge/2aRggQCd8XFHtdtBD

function only5and3(n) {

    if (n <= 2) return false;
    else if (n % 5 === 0) return true;
    else if (3486784401 % n === 0) return true;  // https://stackoverflow.com/questions/1804311/how-to-check-if-an-integer-is-a-power-of-3/1804399
    else return only5and3(n - 5);
}
