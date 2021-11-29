// https://www.codewars.com/kata/56f935002e6c0d55fa000d92/solutions/javascript

class Shark extends Animal {
    constructor(name, age, status) {
        super(name, age);
        this.status = status;
        this.legs = 0;
        this.species = 'shark';
    }
}

class Cat extends Animal {
    constructor(name, age, status) {
        super(name, age);
        this.status = status;
        this.legs = 4;
        this.species = 'cat'; 
    }
    introduce() {
        return super.introduce() + '  Meow meow!';
    }
}

class Dog extends Animal {
    constructor(name, age, status, master) {
        super(name, age);
        this.status = status;
        this.master = master;
        this.legs = 4;
        this.species = 'dog';
    }
    greetMaster() {
        return `Hello ${this.master}`;
    }
}
