// https://www.codewars.com/kata/52532cc8e9ea83b89b000008/

let count = 0;
let secretProperty = '';
while (true) {
    secretProperty = `boom${count}`;
    if (typeof global[secretProperty] !== 'undefined') break;
    else count++;
}

const wirecode = global[secretProperty];
Bomb.CutTheWire(wireCode);
