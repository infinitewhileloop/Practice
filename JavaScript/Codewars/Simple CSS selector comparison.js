// https://www.codewars.com/kata/5379fdfad08fab63c6000a63/

function compare(in1, in2) {
  class Selector {
    constructor(selector) {
      this.selector = selector;
      this.weight = getWeight(selector);
    }
  }
  const sel1 = new Selector(in1);
  const sel2 = new Selector(in2);

  // Sort selectors according to weight
  const selArr = [sel1, sel2];
  selArr.sort(sortWeight);

  // Pick last selector, which has most weight
  return selArr[1].selector;
}

// Extract #id, .class and tagnames
function getWeight(inStr) {
  ids = inStr.match(/#\w+/g) || [];
  classes = inStr.match(/\.\w+/g) || [];
  tags = inStr.match(/\b(?<![.#])\w+\b/g) || [];
  const weight = [ids.length, classes.length, tags.length];
  return weight;
}

// Sort in ascending order
function sortWeight(a, b) {
  if (a.weight[0] > b.weight[0]) return 1;
  else if (b.weight[0] > a.weight[0]) return -1;
  else if (a.weight[1] > b.weight[1]) return 1;
  else if (b.weight[1] > a.weight[1]) return -1;
  else if (a.weight[2] > b.weight[2]) return 1;
  else if (b.weight[2] > a.weight[2]) return -1;
  else return -1;
}
