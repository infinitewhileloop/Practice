// https://exercism.org/tracks/javascript/exercises/beer-song

const recite = (numBottles, takeDown) => {

    let resultArr = [];
    while (takeDown > 0) {
        if (numBottles === 0) {
            resultArr.push('No more bottles of beer on the wall, no more bottles of beer.',
                            'Go to the store and buy some more, 99 bottles of beer on the wall.');
            break;
        } else if (numBottles === 1) {
            resultArr.push(`1 bottle of beer on the wall, 1 bottle of beer.`,
            `Take it down and pass it around, no more bottles of beer on the wall.`);
            numBottles--;
        } else if (numBottles === 2) {
            resultArr.push(`2 bottles of beer on the wall, 2 bottles of beer.`,
            `Take one down and pass it around, 1 bottle of beer on the wall.`);
            numBottles--;
        } else {
            resultArr.push(`${numBottles} bottles of beer on the wall, ${numBottles} bottles of beer.`,
            `Take one down and pass it around, ${--numBottles} bottles of beer on the wall.`);
        }
        if (--takeDown > 0) resultArr.push('');
    }
    return resultArr;
};
