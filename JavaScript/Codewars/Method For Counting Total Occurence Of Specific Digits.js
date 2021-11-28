// https://www.codewars.com/kata/56311e4fdd811616810000ce/

class List {

    countSpecDigits(integersList, digitsList) {
        return digitsList.map(digit => [digit, integersList.join('').split('').filter(x => +x === digit).length]);
    }
}
