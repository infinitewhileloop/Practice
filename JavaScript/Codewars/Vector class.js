// https://www.codewars.com/kata/526dad7f8c0eb5c4640000a4/solutions/

class Vector {

    constructor(arr) {
        this.arr = arr;
    }
    add(otherArr) {
        if (this.arr.length !== otherArr.arr.length) throw new Error('Arrays have different lengths!');
        return new Vector(this.arr.map((e, i) => e + otherArr.arr[i]));
    }
    subtract(otherArr) {
        if (this.arr.length !== otherArr.arr.length) throw new Error('Arrays have different lengths!');
        return new Vector(this.arr.map((e, i) => e - otherArr.arr[i]));
    }
    dot(otherArr) {
        if (this.arr.length !== otherArr.arr.length) throw new Error('Arrays have different lengths!');
        return this.arr.map((e, i) => e * otherArr.arr[i]).reduce((acc, cur) => acc + cur, 0);
    }
    norm() {
        return Math.sqrt(this.arr.map(e => e ** 2).reduce((acc, cur) => acc + cur, 0)); 
    }
    toString() {
        let str = '(';
        for (let i = 0; i < this.arr.length; i++) {
            str += this.arr[i];
            if (i !== this.arr.length - 1) str += ',';
        }
        str += ')';
        return str;
    }
    equals(otherArr) {
        return JSON.stringify(this.arr) === JSON.stringify(otherArr.arr);
    }
}
