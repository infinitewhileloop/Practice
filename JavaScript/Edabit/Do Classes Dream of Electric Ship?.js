// https://edabit.com/challenge/pbeqf95r3H4PRQKJr

class Battleship {

    constructor(scheme, input) {

        this.scheme = scheme;
        this.input = input;
        this.convertedScheme = this.convertCoords(this.scheme);
        this.convertedInput = this.convertCoords(this.input);
        this._hits = this.scheme.filter(letterNumber => this.input.includes(letterNumber));
        this._convertedHits = this.convertCoords(this._hits);
        this._board = this.board()
    }

    convertCoords(coords) {  // convert e.g. 'A1' to [0, 0]
        let letters = 'ABCDE';
        return coords.map(letterNumber => {
            return [...letterNumber].map((char, index) => {
                if (index === 0) return letters.indexOf(char);
                else return Number(char) - 1;
            });
        });
    }

    board() {

        // add blanks to all cells
        let board = [];
        for (let i = 0; i < 5; i++) {
            let row = [];
            for (let j = 0; j < 5; j++) {
                row.push('○');
            }
            board.push(row);
        }

        // add hits
        this._convertedHits.forEach(coords => {
            let [row, col ] = coords;
            board[row][col] = '☀';
        });

        // add misses
        let misses = this.convertCoords(this.input.filter(letterNumber => !this.scheme.includes(letterNumber)));
        misses.forEach(coords => {
            let [row, col] = coords;
            board[row][col] = '☼';
        })

        // add ships
        let ships = this.convertCoords(this.scheme.filter(letterNumber => !this.input.includes(letterNumber)));
        ships.forEach(coords => {
            let [row, col] = coords;
            board[row][col] = '●';
        });

        return board;
    }

    hits() {  // total number of hits
        return this._convertedHits.length;
    }
    sunk() {  // total number of sunk Cruisers (two adjacent cells, horizontally or vertically)
        
        let count = 0;

        this._board.forEach((row, rowIndex) => {  // loop over each row
            row.forEach((cell, colIndex) => {  // loop over each cell in that row
                // check if both that cell and one cell to the right are hits
                if (colIndex !== this._board[0].length - 1 && cell === '☀' && this._board[rowIndex][colIndex + 1] === '☀') count++;
                // check if both that cell and one cell below are hits
                else if (rowIndex !== this._board.length - 1 && cell === '☀' && this._board[rowIndex + 1][colIndex] === '☀') count++;
            });
        });

        return count;
    }

    points() {

        return this.sunk() * 2 + this.hits();
    }
}
