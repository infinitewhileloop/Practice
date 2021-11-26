// https://edabit.com/challenge/FEiLd6HgHcwkgHTWP

function factory(divisor) {

    return function(arr) {
        return arr.map(item => item / divisor);
    }
}
