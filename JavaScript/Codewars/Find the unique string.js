// https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3/

function findUniq(inArr) {
  const fixedArr = inArr
    .map((x) => x.toLowerCase().replace(/\s+/g, '')) // to lowercase and remove all spaces
    .map((word) => {
      const splitWord = [...word];
      return [...new Set(splitWord)]; // reduce 'aaa' to 'a'
    })
    .map((splitWord) => splitWord.sort().join('')); // convert 'acb' to 'abc'

  for (let i = 0; i < fixedArr.length; i++) {
    if (fixedArr.indexOf(fixedArr[i]) === fixedArr.lastIndexOf(fixedArr[i]))
      return inArr[i];
  }
}
