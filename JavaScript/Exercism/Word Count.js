// https://exercism.org/tracks/javascript/exercises/word-count/

function countWords(inputStr) {

    let lowerCase = inputStr.toLowerCase();
    let regex1 = /[^\d\sa-z']/g;  // replace all chars by spaces, except for letters, digits, whitespace or apostrophes
    let regex2 = /'(?!\w)|(?<!\w)'/g; // remove all apostrophes, except those inside a word (that's vs. 'hello')
    let regex3 = /\s+/g;  // replace consecutive whitespace characters by one single space
    let unneededCharsRemoved = lowerCase.replace(regex1, ' ')
                                        .replace(regex2, '')
                                        .replace(regex3, ' ');
    let splitToArr = unneededCharsRemoved.split(/\s/);  // words split on whitespace

    let counter = {};  
    splitToArr.forEach(word => {  // count occurence of each word
        if (word === '') return;
        else if (word in counter) counter[word]++;
        else counter[word] = 1;
    });
    return counter;
}
