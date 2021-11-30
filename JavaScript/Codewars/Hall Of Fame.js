// https://www.codewars.com/kata/59879e52704c4f96540000c1/

class HallOfFame {
    constructor(size = 5, players = []) {
        this.size = size;
        this.players = players;
    }
    get list() {
        let list = [...this.players];  // copy players array
        list.sort((a, b) => {  // sort players
            if (a[1] !== b[1]) return b[1] - a[1];
            else return a[0].localeCompare(b[0]);
        });
        if (list.length > this.size) {  // remove unnecessary players
            list = list.slice(0, this.size);
        }
        list = list.map(item => `${item[0]}: ${item[1]}`);  // change subarray to string
        if (list.length < this.size) {  // add empty players
            list = [...list, ...Array.from(new Array(this.size - list.length)).map(item => '')];
        }
        return list;
    }
    add(player) {
        this.players.push(player);
        return new HallOfFame(this.size, this.players);
    }
}
