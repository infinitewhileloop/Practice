// https://edabit.com/challenge/rLybgi7vcxL2ykt8F

function greetingMaker(greeting) {
    return function(name) {
        return greeting + ', ' + name;
    }
}
