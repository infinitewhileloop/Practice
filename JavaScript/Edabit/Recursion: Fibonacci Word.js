// https://edabit.com/challenge/Bd5pHXo6xJyALroKX

function generateWord(n, counter = 2, arr = ['b', 'a']) {

    if (n < 2) return 'invalid';
    else if (counter === 2) {  // first iteration
        return `${arr[0]}, ${arr[1]}, ` + generateWord(n, ++counter, arr);
    }
    else if (counter < n) {  // middle
        let lastTwo = arr[arr.length - 1] + arr[arr.length - 2];
        arr.push(lastTwo);
        return lastTwo + ', ' + generateWord(n, ++counter, arr);
    }
    else if (counter === n) {  // last iteration
        let lastTwo = arr[arr.length - 1] + arr[arr.length - 2];
        return lastTwo;
    }
}
