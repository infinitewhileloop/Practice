// https://exercism.org/tracks/javascript/exercises/difference-of-squares/solutions

class Squares {

    constructor(limit) {

        this.arrNumbers = Array.from(Array(limit).keys()).map(x => x + 1);
        this._sumOfSquares = this.arrNumbers.reduce((sum, cur) => cur ** 2 + sum, 0);
        this._squareOfSum = this.arrNumbers.reduce((sum, cur) => sum + cur, 0) ** 2;
        this._difference = this._squareOfSum - this._sumOfSquares;
    }

    get sumOfSquares() {
        return this._sumOfSquares;
    }

    get squareOfSum() {
        return this._squareOfSum;
    }

    get difference() {
        return this._difference;
    }
}
