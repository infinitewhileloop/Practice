// https://javascript.info/prototype-inheritance#why-are-both-hamsters-full

let hamster = {
    stomach: [],

    eat(food) {
        if (!this.hasOwnProperty('stomach')) {
            this.stomach = [food];
        } else {
            this.stomach.push(food);
        }
    }
};

let speedy = {
    __proto__: hamster,
};

let lazy = {
    __proto__: hamster,
};
