// https://exercism.org/tracks/javascript/exercises/pig-latin

function translate(phrase) {

    let words = phrase.split(' ');
    let translatedWords = words.map(word => translateWord(word));
    return translatedWords.join(' '); 
}

function translateWord(word) {

    // rule 1 
    if (/^([aeiou]|xr|yt)/.test(word)) {
        return `${word}ay`;

    // rule 3
    } else if (/^[^aeiou]*qu/.test(word)) {
        return word.replace(/^([^aeiou]*qu)(.*)$/, `$2$1ay`);

    // rule 4b
    } else if (word.length === 2 && word[1] === 'y') {
        return `y${word[0]}ay`;

    // rule 4a
    } else if (/^[^aeiou]+y/.test(word)) {
        return word.replace(/^([^aeiou]+)(y.*$)/, `$2$1ay`);

    // rule 2
    } else if (/^[^aeiou]+/.test(word)) {
        return word.replace(/(^[^aeiou]+)(.*$)/, '$2$1ay');

    } else {
        return word;
    }
}
