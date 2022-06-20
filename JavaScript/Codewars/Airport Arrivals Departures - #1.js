// https://www.codewars.com/kata/57feb00f08d102352400026e/train/javascript

function flapDisplay(lines, rotors) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ?!@#&()|<>.:=-+*/0123456789';

  const result = [];
  for (let k = 0; k < lines.length; k++) {
    result.push(flapLine(lines[k], rotors[k]));
  }

  function flapLine(lines, rotors) {
    const splitWord = [...lines];
    for (let i = 0; i < rotors.length; i++) {
      for (let j = i; j < splitWord.length; j++) {
        let letter = splitWord[j];
        let letterIndex = chars.indexOf(letter);
        let newLetter = chars.charAt((letterIndex + rotors[i]) % chars.length);
        splitWord[j] = newLetter;
      }
    }
    return splitWord.join('');
  }

  return result;
}
