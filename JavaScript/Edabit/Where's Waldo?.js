// https://edabit.com/challenge/pNNvNZQCz2DmvT59d

function whereIsWaldo(arr) {
	let coords = [];
    const oddElem = getOddElem(arr);
    arr.forEach((row, rowIndex) => {
        row.forEach((col, colIndex) => {
            if (col === oddElem) coords = [rowIndex + 1, colIndex + 1];
        });
    });
    return coords;
}

function getOddElem(arr) {
    const flat = arr.flat();
    for (let i = 0; i < flat.length; i++) {
        if (flat.indexOf(flat[i]) === flat.lastIndexOf(flat[i])) return flat[i];
    }
}
