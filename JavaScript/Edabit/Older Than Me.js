// https://edabit.com/challenge/iwdZiFucR5wkQsFHu

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    compareAge(other) {
        let ageDiff = this.age - other.age;
        if (ageDiff < 0) {
            return `${other.name} is older than me.`;
        } else if (ageDiff > 0) {
            return `${other.name} is younger than me.`;
        } else {
            return `${other.name} is the same age as me.`;
        }
    }
}
