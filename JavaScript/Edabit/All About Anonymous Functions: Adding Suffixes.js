// https://edabit.com/challenge/Ra85gzkCTtXrNyCag

function add_suffix(suffix) {

    return function(word) {
        return `${word}${suffix}`;
    }
}
