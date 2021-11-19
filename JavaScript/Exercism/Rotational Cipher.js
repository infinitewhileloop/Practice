// https://exercism.org/tracks/javascript/exercises/rotational-cipher

function rotate(input, shift) {

    let output = '';
    for (let char of input) {

        let charCode = char.charCodeAt(0);

        if (/[a-z]/.test(char)) {  // lowercase letter
            output += String.fromCharCode((charCode + shift - 97) % 26 + 97);
            console.log('lower')
        } else if (/[A-Z]/.test(char)) {  // uppercase letter
            output += String.fromCharCode((charCode + shift - 65) % 26 + 65);
            console.log('upper')
        } else {  // not a letter
            output += char;
            console.log('else')
        } 
    }

    return output;
}
