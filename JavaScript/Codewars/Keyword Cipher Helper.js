// https://www.codewars.com/kata/535c1c80cdbf5011e600030f/

class KeywordCipher {
    constructor(abc, keyword) {
        this.abc = abc;
        this.keyword = this.getCorrectKeyword(keyword);
        this.cipher = this.getCipher();
    }
    getCorrectKeyword(ogKeyword) {  // remove duplicate values from keyword (e.g. abb becomes ab)
        return [...ogKeyword].filter((char, index) => {  
            if ([...ogKeyword].slice(0, index).includes(char)) return '';
            else return char;
        }).join('');
    } 
    getCipher() {
        let keywordArr = [...this.keyword];
        let alphabet = [...this.abc].filter(item => !keywordArr.includes(item)).join('');
        return `${this.keyword}${alphabet}`;
    }
    encode(str) {
        return [...str].map(char => {
            let foundIndex = this.abc.indexOf(char);
            if (foundIndex !== -1) return this.cipher[foundIndex];
            else return char;
        }).join('');
    }
    decode(str) {
        return [...str].map(char => {
            let foundIndex = this.cipher.indexOf(char);
            if (foundIndex !== -1) return this.abc[foundIndex];
            else return char;
        }).join('');
    }
}
