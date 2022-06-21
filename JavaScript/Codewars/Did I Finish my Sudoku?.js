// https://www.codewars.com/kata/53db96041f1a7d32dc0004d2/train/javascript

function doneOrNot(board) {
  const deepCopyArr = (arr) => JSON.parse(JSON.stringify(arr));

  const rows = deepCopyArr(board).map((row) => row.sort().join(''));

  const cols = deepCopyArr(board)
    .map((row, rowIx) => {
      return row.map((cell, cellIx) => {
        return board[cellIx][rowIx];
      });
    })
    .map((row) => row.sort().join(''));

  const squares = [];
  for (i = 0; i < 9; i++) {
    const startRow = Math.floor(i / 3);
    const startCol = (i * 3) % 9;
    const square = deepCopyArr(board)
      .slice(startRow * 3, startRow * 3 + 3)
      .map((row) => row.slice(startCol, startCol + 3));
    squares.push(square);
  }
  for (let j = 0; j < squares.length; j++) {
    // Codewars does not support .flat()
    squares[j] = squares[j][0]
      .concat(squares[j][1])
      .concat(squares[j][2])
      .sort()
      .join('');
  }

  const allAreas = rows.concat(cols).concat(squares);
  const notDone = allAreas.some((area) => {
    return !/^123456789$/.test(area);
  });
  return notDone ? 'Try again!' : 'Finished!';
}
