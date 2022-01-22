// https://edabit.com/challenge/bLyX8WoeX2geoW7j4

function generateRug(n) {

    // initialize 2D array
    const arr = [[0]];

    let counter = 1;

    while (counter <= Math.floor(n / 2)) {

        let outerDigit = counter;

        // add digits to beginning and end of existing subarrays
        arr.forEach(row => {
            row.unshift(outerDigit);
            row.push(outerDigit);
        });

        // add new subarray rows to beginning and end of 2D array
        arr.unshift(Array.from({length: counter * 2 + 1}, () => outerDigit));
        arr.push(Array.from({length: counter * 2 + 1}, () => outerDigit));

        counter++;
    }

    return arr;
}
