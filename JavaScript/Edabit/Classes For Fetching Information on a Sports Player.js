// https://edabit.com/challenge/ZngT4zDckDugt2JGY

class Player {
    constructor(name, age, height, weight) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
    }
    getAge() {
        return `${this.name} is age ${this.age}`;
    }
    getHeight() {
        return `${this.name} is ${this.height}cm`;
    }
    getWeight() {
        return `${this.name} weighs ${this.weight}kg`;
    }
}
