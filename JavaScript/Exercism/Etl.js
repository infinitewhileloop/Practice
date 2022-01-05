// https://exercism.org/tracks/javascript/exercises/etl

const transform = oldSystem => {

    const newSystem = {};

    for (let score in oldSystem) {
        oldSystem[score].forEach(letter => {
            newSystem[letter.toLowerCase()] = Number(score);
        });
    }
    
    return newSystem;
}
