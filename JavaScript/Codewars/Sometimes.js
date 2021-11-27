// https://www.codewars.com/kata/555a77eb65dd419534000016/

function sometimes(fn) {

    let counter = 0;

    return function(...args) {
        counter++;
        if (counter < 4 || counter % 2 === 1) {
            return fn(...args);
        } else {
            return `hmm, I don't know!`;
        }
    }
}
