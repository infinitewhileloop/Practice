// https://www.codewars.com/kata/589e4d646642d144a90000d8/

function runningAverage() {

    let total = 0;
    let count = 0;
    
    return function(newVal) {

        total += newVal;
        count++;
        return Math.round(total / count * 100) / 100;
    }
}
