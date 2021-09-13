// https://edabit.com/challenge/9zwdrfW99zmdRhibi

class OnesThreesNines {
    constructor(int) {
        this.int = int;
        this.ones = this.int;
        this.threes = Math.floor(this.int / 3);
        this.nines = Math.floor(this.int / 9);
    }
}
