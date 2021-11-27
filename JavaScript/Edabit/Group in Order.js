// https://edabit.com/challenge/w5LTwJwDLK4uQ3Dmv

function group(arr, size) {

    let initialGroupLength = Math.ceil(arr.length / size);
    let subArr = [];
    for (let i = 0; i < arr.length; i += initialGroupLength) {
        let slice = arr.slice(i, i + initialGroupLength);
        subArr.push(slice);
    }

    let outputArr = [];
    for (let j = 0; j < subArr[0].length; j++) {
        let temp = [];
        for (let k = 0; k < subArr.length; k++) {
            let cell = subArr[k][j];
            if (cell !== undefined) temp.push(subArr[k][j]);
        }
        outputArr.push(temp);
    }
    return outputArr;
}
