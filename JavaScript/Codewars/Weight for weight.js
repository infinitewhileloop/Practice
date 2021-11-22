// https://www.codewars.com/kata/55c6126177c9441a570000cc/solutions/javascript

function orderWeight(inputStr) {

    let inputArr = inputStr.match(/\b\d+\b/g) || [];

    const attributeWeight = num => [...num].reduce((acc, cur) => acc + Number(cur), 0);

    inputArr.sort((a, b) => {

        if (attributeWeight(a) < attributeWeight(b)) return -1;
        else if (attributeWeight(a) > attributeWeight(b)) return 1;
        else {
            if (a < b) return -1;
            else if (a > b) return 1;
            else return 0;
        }
    });
    
    return inputArr.join(' ');
}
