// https://www.codewars.com/kata/525caa5c1bf619d28c000335/

function isSolved(board) {
  // check rows for winner
  const rows = board.map((row) => row.join(''));
  if (rows.includes('111')) return 1;
  else if (rows.includes('222')) return 2;

  // check cols for winner
  const cols = board[0].map((_, colIndex) => board.map((row) => row[colIndex]));
  if (cols.includes('111')) return 1;
  else if (cols.includes('222')) return 2;

  // check diagonal for winner
  const diagonal = [
    '' + board[0][0] + board[1][1] + board[2][2],
    '' + board[0][2] + board[1][1] + board[2][0],
  ];
  if (diagonal.includes('111')) return 1;
  else if (diagonal.includes('222')) return 2;

  if (board.join('').replace(/,/g, '').includes(0)) return -1; // not yet finished and no one has won yet

  return 0; // game is finished and no one has won (draw)
}
