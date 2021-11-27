// https://edabit.com/challenge/95YiRnBSnfzSQWAuu

function product(a1, a2) {

    return function(b1, b2) {
        return function (c1, c2) {
            return (a1 * b1 * c1) + (a2 * b2 * c2);
        }
    }
}
