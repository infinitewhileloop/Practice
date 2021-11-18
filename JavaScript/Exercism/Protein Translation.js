// https://exercism.org/tracks/javascript/exercises/protein-translation

const translate = (input = '') => {

  const mapping = [
    ['Methionine', ['AUG']],
    ['Phenylalanine', ['UUU', 'UUC']],
    ['Leucine', ['UUA', 'UUG']],
    ['Serine', ['UCU', 'UCC', 'UCA', 'UCG']],
    ['Tyrosine', ['UAU', 'UAC']],
    ['Cysteine', ['UGU', 'UGC']],
    ['Tryptophan', ['UGG']],
  ];
  const stopCodons = ['UAA', 'UAG', 'UGA'];
  
  let output = [];

  for (let i = 0; i < input.length; i += 3) {

    let substr = input.substr(i, 3);

    if (stopCodons.includes(substr)) return output;

    if (!mapping.flat(2).includes(substr)) throw new Error('Invalid codon');

    mapping.forEach(item => {
      if (item[1].includes(substr)) {
        output.push(item[0]);
      }
    });
  }

  return output;
}
