// https://exercism.org/tracks/javascript/exercises/rail-fence-cipher

function encode(sentence, rails) {

    let outputArr = [...Array(rails)].map(x => []);
    let direction = 'down';
    let curRow = 0;
    let maxRow = rails - 1;

    for (let char of sentence) {

        outputArr[curRow].push(char);

        if (curRow !== 0 && curRow !== maxRow) {
            direction === 'down' ? curRow++ : curRow--;
        } else if (curRow === 0) {
            direction = 'down';
            curRow++;
        } else if (curRow === maxRow) {
            direction = 'up';
            curRow--;
        }
    }

    return outputArr.flat().join('');
}

function decode(sentence, rails) {

    let arr = [...Array(rails)].map(x => []);
    let direction = 'down';
    let curRow = 0;
    let maxRow = rails - 1;

    // create 2D array with dots (i.e. empty spot) and question marks (i.e. future char)
    for (let char of sentence) {

        arr.forEach((subArr, index) => {
            if (index === curRow) subArr.push('?');
            else subArr.push('.');
        });

        if (curRow !== 0 && curRow !== maxRow) {
            direction === 'down' ? curRow++ : curRow--;
        } else if (curRow === 0) {
            direction = 'down';
            curRow++;
        } else if (curRow === maxRow) {
            direction = 'up';
            curRow--;
        }
    }

    // replace question marks by chars
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            if (arr[i][j] === '?') {
                arr[i][j] = sentence[0];
                sentence = sentence.slice(1);
            }
        }
    }

    // read chars following zig-zag shape
    let result = '';
    for (let b = 0; b < arr[0].length; b++) {
        for (let a = 0; a < arr.length; a++) {
            if (arr[a][b] !== '.') {
                result += arr[a][b];
            }
        }
    }

    return result; 
}
