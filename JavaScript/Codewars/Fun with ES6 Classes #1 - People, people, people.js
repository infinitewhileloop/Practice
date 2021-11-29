// https://www.codewars.com/kata/56f7f8215d7c12c0e7000b19/

class Person {
    constructor(firstName = 'John', lastName = 'Doe', age = 0, gender = 'Male') {
        Object.assign(this, {firstName, lastName, age, gender});
    }
    sayFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    static greetExtraTerrestrials(raceName) {
        return `Welcome to Planet Earth ${raceName}`;
    }
}
