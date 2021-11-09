// https://exercism.org/tracks/javascript/exercises/acronym

const parse = phrase => {

    let words = phrase.replace(/-/g, ' ') // make sure e.g. metal-oxide is considered as 2 words
        .match(/[A-Z-']+/gi);  // extract words from phrase to array
    return words.map(word => word[0]  // get first char of each word
        .toUpperCase())
        .filter(letter => letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90)  // only keep first char if it's part of [A-Z]
        .join('');
};
