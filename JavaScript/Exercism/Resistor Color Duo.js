// https://exercism.org/tracks/javascript/exercises/resistor-color-duo

function decodedValue(colorArr) {

    const colorValues = {
        black: 0,
        brown: 1,
        red: 2,
        orange: 3,
        yellow: 4,
        green: 5,
        blue: 6,
        violet: 7,
        grey: 8,
        white: 9
    };

    return colorValues[colorArr[0]] * 10 + colorValues[colorArr[1]];
}
