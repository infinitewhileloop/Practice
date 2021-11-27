// https://www.codewars.com/kata/5546ea9bddfc5c0c38000026/

function Counter() {

    let counter = 0;

    Object.defineProperty(this, 'check', {
        value: function() {
            return counter;
        }
    })

    Object.defineProperty(this, 'increment', {
        value: function() {
            counter++;
        }
    })
}
