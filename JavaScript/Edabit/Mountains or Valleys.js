// https://edabit.com/challenge/LgfitGtQZTJBNbsCQ

function landscapeType(arr) {

    if (isMountain(arr)) return 'mountain';
    else if (isValley(arr)) return 'valley';
    else return 'neither';
}

function isMountain(arr) {

    const max = Math.max(...arr);
    const maxIndex = arr.indexOf(max);
    if (maxIndex !== arr.lastIndexOf(max)) return false;  // verify if max is only present once
    if (maxIndex === 0 || maxIndex === arr.length - 1) return false;  // peak cannot be on boundary

    const part1 = arr.slice(0, maxIndex);  // part up to max
    const part2 = arr.slice(maxIndex + 1);  // part from max onwards

    const isIncreasing = part1.every((x, i) => {  // verify if every item is increasing
        if (i === 0) return true;  // first item
        return x >= part1[i - 1];
    });

    const isDecreasing = part2.every((x, i) => {  // verify if every item is decreasing
        if (i === 0) return true;  // first item
        return x <= part2[i - 1];
    });

    return isIncreasing && isDecreasing;
}

function isValley(arr) {

    const min = Math.min(...arr);
    const minIndex = arr.indexOf(min);
    if (minIndex !== arr.lastIndexOf(min)) return false;  // verify if min is only present once
    if (minIndex === 0 || minIndex === arr.length - 1) return false;  // trough cannot be on boundary

    const part1 = arr.slice(0, minIndex);  // part up to min
    const part2 = arr.slice(minIndex + 1);  // part from min onwards

    const isDecreasing = part1.every((x, i) => {  // verify if every item is decreasing
        if (i === 0) return true;  // first item
        return x <= part1[i - 1];
    });

    const isIncreasing = part2.every((x, i) => {  // verify if every item is increasing
        if (i === 0) return true;  // first item
        return x >= part2[i - 1];
    });

    return isDecreasing && isIncreasing;
}
