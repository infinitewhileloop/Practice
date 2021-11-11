// https://exercism.org/tracks/javascript/exercises/nucleotide-count

function countNucleotides(strand) {

    if (/[^ACGT]/.test(strand)) throw new Error('Invalid nucleotide in strand');

    return `${(strand.match(/A/g) || []).length} ${(strand.match(/C/g) || []).length} ${(strand.match(/G/g) || []).length} ${(strand.match(/T/g) || []).length}`;
}
