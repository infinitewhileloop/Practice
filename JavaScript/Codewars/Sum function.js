// https://www.codewars.com/kata/57ab606e53ba3339da0000a2/solutions/javascript

function sum(...firstArgs) {

    //const sumArr = arr => arr.reduce((acc, cur) => acc + cur, 0);

    let arr = [];
    arr.push(...firstArgs);

    if(firstArgs.length > 1) {
        return sumArr(arr);
    }

    return function(secondArg) {
        arr.push(secondArg);
        return sumArr(arr);
    }
}

function sumArr(arr) {

    let sum = 0;
    for(let index in arr) {
        sum += arr[index];
    }
    return sum;
}
