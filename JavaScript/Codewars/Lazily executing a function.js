// https://www.codewars.com/kata/5458d4d2cbae2a9438000389/

const make_lazy = function(func, ...args) {
    
    return function() {
        return func(...args)
    }
}
