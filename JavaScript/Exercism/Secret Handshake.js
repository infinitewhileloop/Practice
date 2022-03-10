// https://exercism.org/tracks/javascript/exercises/secret-handshake

function commands(input) {

    const handshakes = [ 'wink', 'double blink', 'close your eyes', 'jump', 'reverse' ];
    
    const decToBin = input.toString(2);  // convert to binary
    const binToArr = [...decToBin.toString()].reverse();  // convert to reversed array of binary digits
    
    const arrToWords = binToArr.map((x, i) => {  // create array with handshakes
        if (Number(x) === 1) return handshakes[i];
    });
    let woUndef = arrToWords.filter(x => x);  // remove undefined items

    if (woUndef[woUndef.length - 1] === 'reverse') {  // reverse order of operations
        woUndef.pop();
        woUndef = woUndef.reverse();
    }

    return woUndef;
}
