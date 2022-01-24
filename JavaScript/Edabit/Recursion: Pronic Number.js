// https://edabit.com/challenge/rtYE79GzaQp4RccFC

function isHeteromecic(origN, n = origN) {

    if (n < 0) {
        return false;

    } else if (n * (n + 1) === origN) {
        return true;

    } else {
        return Boolean(false + isHeteromecic(origN, n - 1));
    }
}
