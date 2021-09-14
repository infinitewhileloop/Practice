// https://edabit.com/challenge/HKmJFmZZCX53ff4ke

let table = {
        'Plain': 0,
        'Vanilla': 5,
        'ChocolateChip': 5,
        'Strawberry': 10,
        'Chocolate': 10
    };

function sweetestIcecream(arr) {

    let values = arr.map(item => table[item.flavor] + item.numSprinkles)
    return Math.max(...values);
}
