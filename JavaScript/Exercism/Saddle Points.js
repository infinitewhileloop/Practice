// https://exercism.org/tracks/javascript/exercises/saddle-points/

const saddlePoints = arr => {

    let rowMax = arr.reduce((acc, row, i) => {  // create table with max values per row
        acc[i] = Math.max(...row);  // object, key = row index, value = max item in that row
        return acc;
    }, {});

    let transposedArr = arr[0].map((_, colIndex) => arr.map(row => row[colIndex]));  // https://stackoverflow.com/questions/17428587/transposing-a-2d-array-in-javascript
    let colMin = transposedArr.reduce((acc, row, i) => {  // create table with min values per column
        acc[i] = Math.min(...row);  // object, key = col index, value = min item in that column
        return acc;
    }, {});

    let resultArr = [];
    arr.forEach((row, rowIndex) => {  // loop over each row
        row.forEach((cell, colIndex) => {  // loop over each cell in that row
            if (cell === rowMax[rowIndex] && cell === colMin[colIndex]) {
                resultArr.push({row: rowIndex + 1, column: colIndex + 1});
            }
        });
    });

    return resultArr;
}
