// https://javascript.info/eval#eval-calculator

let reply = prompt('Type an arithmetic expression?', '2*3+2');
if (/^[\d\s\(\)+*\/-]+$/.test(reply)) {
    alert(eval(reply));
} else {
    alert('Invalid arithmetic expression');
}
