// https://exercism.org/tracks/javascript/exercises/say

class Say {

  inEnglish(number) {

    if (number < 0 || number > 999_999_999_999) {
      throw 'Number must be between 0 and 999,999,999,999.';
    }

    if (number === 0) return 'zero';

    let thousandsArr = this.breakNumberUp(number);

    let arrWithScaleWords = this.insertScaleWords(thousandsArr);

    let translatedArr = arrWithScaleWords.map(item => {
      if (isNaN(item)) return item;  // keep words as is
      else return this.translateThousand(item);  // translate numbers
    });

    return translatedArr.join(' ').trim();
  }

  translateThousand(number) {

    let lowNums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
      'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
      'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ['empty', 'empty', 'twenty', 'thirty', 'forty', 'fifty',
      'sixty', 'seventy', 'eighty', 'ninety'];

    let result = '';

    while (number > 0) {
      if (number >= 100) {
        let hundred = Math.floor(number / 100);
        result += `${lowNums[hundred]} hundred `;
        number -= hundred * 100;
      } else if (number < 20) {  // 0 to 19
        result += lowNums[number];
        break;
      } else if (number % 10 === 0) {  // e.g. 50
        result += `${tens[number / 10]}`;
        break;
      } else if (number < 100) {  // 20 to 99, not ending on a zero
        result += `${tens[Math.floor(number / 10)]}-${lowNums[number % 10]}`;
        break;
      }
    }

    return result
  }

  breakNumberUp(number) {  // break number up into chunks of thousands
    let numberOfDigits = String(number).length;  // count digits in number

    let thousands = [];

    for (let i = Math.floor(numberOfDigits / 3); i >= 0; i--) {
      let chunk = Math.floor(number / 1000 ** i);
      thousands.push(chunk);
      number -= chunk * 1000 ** i;
    }

    if (thousands[0] === 0) thousands.shift();  // remove 1st item if it's 0

    return thousands;
  }

  insertScaleWords(thousandsArr) {  // insert scale words

    let origArrLength = thousandsArr.length;  // original lenght of array, before inserting words

    if (origArrLength > 1) thousandsArr.splice(-1, 0, 'thousand');  // add scale words
    if (origArrLength > 2) thousandsArr.splice(-3, 0, 'million');
    if (origArrLength > 3) thousandsArr.splice(-5, 0, 'billion');

    while (thousandsArr.includes(0)) {  // prevent e.g. 0 thousand
      thousandsArr.forEach((item, index) => {
        if (item === 0) {  // if item is 0, remove item and next item
          thousandsArr.splice(index, 2);
        }
      });
    }
    return thousandsArr;
  }
}
