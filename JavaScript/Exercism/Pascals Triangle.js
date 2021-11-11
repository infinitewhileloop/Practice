// https://exercism.org/tracks/javascript/exercises/pascals-triangle/solutions

function rows(numRows) {

    let result = [];

    for (let i = 0; i <= numRows; i++) {
        let lastRow = result[result.length - 1];
        let newRow = [];
        for (let j = 0; j < i; j++) {
            let newVal = (lastRow[j - 1] + lastRow[j]) || 1;
            newRow.push(newVal);
        }
        result.push(newRow);
    }

    result.shift(); // remove empty subarray (first item in array)
    return result;
}
