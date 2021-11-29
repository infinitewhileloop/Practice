// https://www.codewars.com/kata/568018a64f35f0c613000054/

class Guesser {
    constructor(number, lives) {
        this.number = number;
        this.lives = lives;
    }

    guess(n) {
        if (this.lives <= 0) throw new Error('Game Over');
        if (n === this.number) {
            return true;
        } else {
            this.lives--;
            return false;
        }
    }
}
