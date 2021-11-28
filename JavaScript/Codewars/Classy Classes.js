// https://www.codewars.com/kata/55a144eff5124e546400005a/

class Person {
    constructor(name, age) {
        Object.assign(this, {name, age});
    }
    get info() {
        return `${this.name}s age is ${this.age}`;
    }
}
