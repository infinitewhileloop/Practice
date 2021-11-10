// https://exercism.org/tracks/javascript/exercises/raindrops

const convert = num => {

    let output = '';
    output = num % 3 === 0 ? output + 'Pling' : output;
    output = num % 5 === 0 ? output + 'Plang' : output;
    output = num % 7 === 0 ? output + 'Plong' : output;
    return output || String(num);
}
