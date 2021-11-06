// https://exercism.org/tracks/javascript/exercises/matrix/

class Matrix {
  constructor(str) {
    this.twoDimArr = str.split('\n')
                        .map(line => line.split(' '))  // e.g. [ [ '1', '2' ], [ '3', '4' ] ]
                        .map(row => row.map(item => Number(item)));  // convert strings to numbers (e.g. '1' to 1)
  }

  get rows() {
    return this.twoDimArr;
  }

  get columns() {  // transpose 2D array
    let allRows = [];
    for (let i = 0; i < this.twoDimArr[0].length; i++) {
      let singleRow = [];
      for (let j = 0; j < this.twoDimArr.length; j++) {
        singleRow.push(this.twoDimArr[j][i]);
      }
      allRows.push(singleRow);
    }
    return allRows;
  }
}
