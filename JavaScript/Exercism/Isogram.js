// https://exercism.org/tracks/javascript/exercises/isogram

function isIsogram(input) {

    let letters = input.toLowerCase().match(/[a-z]/g) || [];
    let uniqLetters = [...new Set(letters)];
    return letters.length === uniqLetters.length;
}
