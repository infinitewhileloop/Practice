// https://www.codewars.com/kata/55a14aa4817efe41c20000bc/

class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    speak() {
        return `${this.name} meows.`;
    }
}
