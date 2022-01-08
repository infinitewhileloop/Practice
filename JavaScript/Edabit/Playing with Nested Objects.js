// https://edabit.com/challenge/eARWGdpymGeNQiHBi

function getObject(input) {

    // convert object to array
    const arr = Object.entries(input);

    // sort array, first by marks, then by age
    arr.sort((a, b) => {
        if (a[1].marks > b[1].marks) return -1;
        else if (a[1].marks < b[1].marks) return 1;
        else {
            if (a[1].age > b[1].age) return -1;
            else if (a[1].age < b[1].age) return 1;
            else return 0;
        }
    });

    // filter out duplicates
    const woDups = arr.filter((x, i) => {
        if (i === 0) return true;
        else if (x[1].marks === arr[i - 1][1].marks) return false;
        else return true;
    });

    // sort again, now by 'key'
    woDups.sort((a, b) => {
        if (Number(a[0]) < Number(b[0])) return -1;
        else if (Number(a[0]) > Number(b[0])) return 1;
        else return 0;
    })

    // modify keys, to take into account removed persons (e.g. 0, 2, 3 becomes 0, 1, 2)
    woDups.forEach((x, i) => x[0] = String(i));

    // convert array back to object
    return Object.fromEntries(woDups);
}
