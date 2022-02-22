// https://exercism.org/tracks/javascript/exercises/queen-attack

class QueenAttack {

    constructor(input = {}) {

        if (input.white) {
            this.white = input.white;
            this.whiteRow = input.white[0];
            this.whiteCol = input.white[1];
            this.isOnBoard(this.whiteRow);
            this.isOnBoard(this.whiteCol);
        } else {
            this.white = [7, 3];
            this.whiteRow = 7;
            this.whiteCol = 3;
        }

        if (input.black) {
            this.black = input.black
            this.blackRow = input.black[0];
            this.blackCol = input.black[1];
            this.isOnBoard(this.blackRow);
            this.isOnBoard(this.blackCol);
        } else {
            this.black = [0, 3];
            this.blackRow = 0;
            this.blackCol = 3;
        }

        if (input.white && input.black) {
            if (this.whiteRow === this.blackRow && this.whiteCol === this.blackCol) {
                throw new Error('Queens cannot share the same space');
            }
        }
    }

    isOnBoard(num) {
        if (num < 0 || num > 7) throw new Error('Queen must be placed on the board');
    } 

    get canAttack() {
        if (this.whiteRow === this.blackRow) return true;
        if (this.whiteCol === this.blackCol) return true;
        if (this.whiteRow - this.whiteCol === this.blackRow - this.blackCol) return true;
        if (this.whiteRow + this.whiteCol === this.blackRow + this.blackCol) return true;
        return false;
    }

    toString() {
        let board = new Array(8).fill('x');
        board.forEach((row, i) => {
            board[i] = new Array(8).fill('_');
        });
        board[this.whiteRow][this.whiteCol] = 'W';
        board[this.blackRow][this.blackCol] = 'B';
        board.forEach((row, i) => {
            board[i] = row.join(' ');
        })
        return board.join('\n');
    }
}
