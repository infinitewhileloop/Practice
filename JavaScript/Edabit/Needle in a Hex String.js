// https://edabit.com/challenge/Fev8jkLtDunP9wexv

const hexToDec = hex => parseInt(hex, 16);

const codeToChar = hex => {
    const dec = hexToDec(hex);
    return String.fromCharCode(dec);
}

const firstIndex = (hex, needle) => {
    const arr = hex.split(' ');
    const str = arr.map(x => {
        return codeToChar(x)
    }).join('');
    return str.indexOf(needle);
}
