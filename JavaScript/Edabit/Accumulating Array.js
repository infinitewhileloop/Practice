// https://edabit.com/challenge/FkH4K9TpFG98t52Ex

function accumulatingArray(arr) {
	
    return arr.map((item, index) => {
        return arr.slice(0, index + 1).reduce((acc, cur) => acc + cur, 0);
    });
}
