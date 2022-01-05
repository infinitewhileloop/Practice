// https://exercism.org/tracks/javascript/exercises/pangram/

const isPangram = sentence => {

    sentence = sentence.toLowerCase();

    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    for (let letter of alphabet) {
        if (!sentence.includes(letter)) {
            return false;
        }
    }

    return true;
}
