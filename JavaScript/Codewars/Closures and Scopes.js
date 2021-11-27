// https://www.codewars.com/kata/526ec46d6f5e255e150002d1/solutions/javascript

function createFunctions(num) {

    let arr = Array.from(new Array(num)).map((item, index) => {
        return function() {
            return index;
        }
    });
    return arr;
}
