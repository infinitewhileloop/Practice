// https://edabit.com/challenge/4zCJaqJvEcAmqcb7y

function reorderDigits(arr, direction) {
  
    const sortDigits = (direction === 'asc') ? (a, b) => a - b : (a, b) => b - a;
  
    return arr
    .map(x => x
                .toString()
                .split('')
                .sort(sortDigits))
    .map(x => Number(
                x.join('')));
}
