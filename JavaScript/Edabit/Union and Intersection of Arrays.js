// https://edabit.com/challenge/MfAkm7CkWqepAZTBM

function intersectionUnion(arr1, arr2) {
	
    const intersection = [...new Set(arr1.filter(x => arr2.includes(x)).sort((a,b) => a - b))];
    const union = [...new Set([...arr1, ...arr2])].sort((a, b) => a - b);
    return [intersection, union];
}
