// https://edabit.com/challenge/7ytmgtAXGAccwpvJN

const dollarToNumber = str => Number(str.slice(1));  // convert '$1' to 1
const numberToDollar = num => `$${num.toFixed(2)}`;  // convert 1 to '$1'

const prices = {
    Strawberries: "$1.50", Banana: "$0.50", Mango: "$2.50",
    Blueberries: "$1.00", Raspberries: "$1.00", Apple: "$1.75",
    Pineapple: "$3.50"
};

const pricesAsNums = { ...prices };  // convert all prices in dollars to numbers
for (let key in pricesAsNums) {
    pricesAsNums[key] = dollarToNumber(pricesAsNums[key]);
}

class Smoothie {

    constructor(ingredients) {
        this.ingredients = ingredients;
    }
    getCost() {
        let sum = this.ingredients.reduce((acc, cur) => acc + pricesAsNums[cur], 0);
        return numberToDollar(sum);
    }
    getPrice() {
        let sum = dollarToNumber(this.getCost()) * 2.5;
        return numberToDollar(sum);
    }
    getName() {
        let sortedIngredients = this.ingredients.sort();
        sortedIngredients.length === 1 ? sortedIngredients.push('Smoothie') : sortedIngredients.push('Fusion');
        let strIngredients = sortedIngredients.join(' ')
            .replace(/berries/g, 'berry');  // replaceAll not yet supported by Edabit
        return strIngredients;
    }
}
