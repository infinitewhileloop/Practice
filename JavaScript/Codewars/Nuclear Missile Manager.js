// https://www.codewars.com/kata/567ed5db4089538eea000010/

function launchAll(callback) {

    for (let i = 0; i < 5; i++) {
        setTimeout(callback, i * 1000, i);
    }
}
