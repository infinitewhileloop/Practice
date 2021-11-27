// https://www.codewars.com/kata/55c211cce1ef691d9b000061/

function calculate(...args1) {

    return function(...args2) {
        return [...args1, ...args2].reduce((acc, cur) => acc + cur, 0);
    }
} 
