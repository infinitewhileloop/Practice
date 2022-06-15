// https://www.codewars.com/kata/530e15517bc88ac656000716/

function rot13(message) {
  return [...message].reduce((word, char) => {
    let charCode = char.charCodeAt(0);

    if (97 <= charCode && charCode <= 122) {
      // lowercase
      return charCode <= 109
        ? word + String.fromCharCode(charCode + 13)
        : word + String.fromCharCode(charCode - 13);
    } else if (65 <= charCode && charCode <= 90) {
      // uppercase
      return charCode <= 78
        ? word + String.fromCharCode(charCode + 13)
        : word + String.fromCharCode(charCode - 13);
    } else {
      // not a letter
      return word + char;
    }
  }, '');
}
