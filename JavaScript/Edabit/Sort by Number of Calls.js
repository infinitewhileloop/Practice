// https://edabit.com/challenge/zi2Mvb2GZi3r34JKv

function countNumCalls(func) {

    let funcStr = String(func);
    let matches = funcStr.match(/=>/g) || [];
    return matches.length;
}

function funcSort(arr) {
    
    return arr.sort((a, b) => countNumCalls(a) - countNumCalls(b));
}
