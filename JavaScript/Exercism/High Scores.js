// https://exercism.org/tracks/javascript/exercises/high-scores

export class HighScores {
    constructor(input) {
        this._scores = input;
    }
    get scores() { return this._scores }
    get latest() { return this._scores[this._scores.length - 1] }
    get personalBest() { return Math.max(...this._scores) }
    get personalTopThree() { return [...this._scores].sort((a, b) => b - a).slice(0, 3) }
}
