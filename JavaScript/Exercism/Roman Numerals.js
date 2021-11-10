// https://exercism.org/tracks/javascript/exercises/roman-numerals

const toRoman = num => {

    let upToTen = { 1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX' };
    let upToHundred = { 1: 'X', 2: 'XX', 3: 'XXX', 4: 'XL', 5: 'L', 6: 'LX', 7: 'LXX', 8: 'LXXX', 9: 'XC' };
    let upToThousand = { 1: 'C', 2: 'CC', 3: 'CCC', 4: 'CD', 5: 'D', 6: 'DC', 7: 'DCC', 8: 'DCCC', 9: 'CM' };
    let upToThreeThousand = { 1: 'M', 2: 'MM', 3: 'MMM' };

    let digitsArr = [...num.toString()];  // e.g. [ '3', '9', '4' ]
    let order = [ upToThreeThousand, upToThousand, upToHundred, upToTen ].slice(digitsArr.length * -1);  // keep only as many operations as needed

    return digitsArr.map((digit, index) => {  // convert digits array to array with Roman numerals
        if (digit === '0') return '';         // no zero in Roman numerals
        else return order[index][digit];      // lookup digit in relevant object
    }).reduce((acc, cur) => acc + cur, '');   // concatenate strings
}
