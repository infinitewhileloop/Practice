// https://exercism.org/tracks/javascript/exercises/anagram

const findAnagrams = (word, candidates) => {

    const sortLetters = word => [...word.toLowerCase()].sort().join('');

    return candidates.filter(candidate => sortLetters(word) === sortLetters(candidate) 
        && word.toLowerCase() !== candidate.toLowerCase());
};
