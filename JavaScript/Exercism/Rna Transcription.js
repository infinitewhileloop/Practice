// https://exercism.org/tracks/javascript/exercises/rna-transcription

const toRna = input => {

    let table = { G: 'C', C: 'G', T: 'A', A: 'U' };
    return [...input].reduce((concat, char) => concat + table[char], '');
  };
