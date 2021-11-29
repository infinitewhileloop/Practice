// https://www.codewars.com/kata/57a93f93bb9944516d0000c1/solutions/javascript

class Dictionary {
    constructor() {
        this.words = {};
    }
    newEntry(key, value) {
        this.words[key] = value;
    }
    look(key) {
        if (this.words.hasOwnProperty(key)) {
            return this.words[key];
        } else {
            return `Can't find entry for ${key}`;
        }
    }
}
