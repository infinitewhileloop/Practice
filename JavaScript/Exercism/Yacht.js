// https://exercism.org/tracks/javascript/exercises/yacht

function score(rolls, category) {

    rolls.sort((a, b) => a - b);
    let uniqs = [...new Set(rolls)];

    let simpleCategories = {'ones': 1, 'twos': 2, 'threes': 3, 'fours': 4, 'fives': 5, 'sixes': 6};

    if (category in simpleCategories) {
        return rolls.filter(roll => roll === simpleCategories[category]).reduce((acc, cur) => acc + cur, 0);
    }

    switch (category) {
        case 'full house':
            if (uniqs.length === 2 && rolls[1] !== rolls[3]) return rolls.reduce((acc, cur) => acc + cur, 0);
            else return 0;
        case 'four of a kind':
            if (uniqs.length <= 2 && rolls[1] === rolls[3]) {
                return rolls.indexOf(uniqs[0]) === rolls.lastIndexOf(uniqs[0]) ? uniqs[1] * 4 : uniqs[0] * 4;
            }
            else return 0;
        case 'little straight':
            if (JSON.stringify(rolls) === JSON.stringify([1, 2, 3, 4, 5])) return 30;
            else return 0;
        case 'big straight':
            if (JSON.stringify(rolls) === JSON.stringify([2, 3, 4, 5, 6])) return 30;
            else return 0;
        case 'choice':
            return rolls.reduce((acc, cur) => acc + cur, 0);
        case 'yacht':
            return uniqs.length === 1 ? 50 : 0; 
    }
}
