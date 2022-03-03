// https://exercism.org/tracks/javascript/exercises/allergies/

class Allergies {

    constructor(score) {
        this.score = score;
    }

    list() {
        const items = [ 'eggs', 'peanuts', 'shellfish', 'strawberries', 'tomatoes', 'chocolate', 'pollen', 'cats' ];
        let tempScore = this.score;

        const maxScore = Math.pow(2, items.length - 1);  // if there are 8 items, score should be maximum 128

        // if score includes allergens not listed in items array, ignore those components
        if (tempScore > maxScore) {

            // determine closest power of 2 (rounded up), e.g. for 513 is this 1024
            let closestPower2 = maxScore;
            while (closestPower2 < tempScore) {
                closestPower2 *= 2;
            }

            // push empty items to array
            while (closestPower2 > maxScore) {
                items.push('');
                closestPower2 /= 2;
            }
        }

        let result = [];
        for (let i = items.length - 1; i >= 0; i--) {
            let power = Math.pow(2, i);
            if (tempScore>= power) {
                tempScore -= power;
                result.push(items[i]);
            }
        }
        result = result.filter(item => item !== '');  // remove empty items
        return result.reverse();
    }

    allergicTo(food) {
        return this.list().includes(food);
    }
}
