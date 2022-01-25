// https://edabit.com/challenge/JtmsfWqEB8z2nwiu4

function fiboWord(n) {
	
    if (n < 2) return 'invalid';

    const arr = ['b', 'a'];

    for (let i = 2; i < n; i++) {
        let lastTwo = arr.slice(-2).reverse().join('');
        arr.push(lastTwo);
    }

    return arr.join(', ');
}
